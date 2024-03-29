
import { Component, Prop, Element, h, Method } from '@stencil/core';
import { HostElement } from '@stencil/core/dist/declarations';
import { AzTree } from './az-tree';
var id = 1;
@Component({
  tag: 'az-tree-item',
  shadow: false
})
export class AzTreeItem {
  @Element() el: HostElement;

  @Prop() caption: string = '';
  @Prop() items: AzTreeItem[] = [];
  @Prop() selected: false;
  @Prop() tree: AzTree = null;
  @Prop() level: number = 0;
  @Prop() expanded: boolean = false;

  data: any = null;

  constructor(caption: string, level: number = 0) {
    this.caption = caption;
    this.level = level;
  }

  @Method()
  async addItem(item: AzTreeItem | string) {
    if (!this.tree) {
      throw new Error(`No parent tree!`);
    }
    this.tree.addItem(item, this);
  }

  render() {
    const style: any = {};
    if (this.level) style.textIndent = `${(this.level + 1) * 16}px`;
    console.log(id);
    return (
      <div id={`az-tree-item-${id++}`} class={{'az-tree-item': true, 'expanded': this.expanded}} data-level={this.level} style={style}>
        <div class="az-tree-item-caption az-caption">
          <span class="az-tree-item-caption az-caption">{this.caption}</span>
        </div>
        {this.items.length > 0 && <div class="az-tree-items">{
          this.items.map((c: AzTreeItem) => <az-tree-item caption={c.caption} level={c.level}></az-tree-item>)
        }</div>}
      </div>
    );
  }
}