import {Component, ViewContainerRef, TemplateRef, ContentChild, ViewChild, Input} from "@angular/core";
@Component({
  selector: 'templatec-component',
  template: `
<button (click)="onClick()">Create Template</button>
<div #container></div>

<ng-container>
ddd
</ng-container>


<childCmp [template]="template"></childCmp>
<br/><hr/>
    <template #template let-desc="description" >
      <div [style.background-color]="desc.color">
          <h2>My {{desc.count}} template</h2>
          <button (click)="btnClicked(desc.color)">My {{desc.desc}} button</button>
    </div>
    </template>
    this is the end of the template
`
})
export class TemplateComponent {

  @ViewChild("template") private template: TemplateRef<any>;
  private counter: number = 0;

  constructor(private container: ViewContainerRef) {
  }

  btnClicked(val) {
    console.log("parent", val);
  }

  onClick() {
    this.container.createEmbeddedView(this.template, {
      description: {desc: 'sweet', count: this.counter++, color: "lightgrey"}
    });
  }
}


@Component({
  selector: 'childCmp',
  template: `

<div style="background-color: darkseagreen">
  
  <template [ngTemplateOutlet]="template", [ngOutletContext]="content">
  </template>
  <button (click)="onClick()">Child Create Template</button>
  aaa
  <template [ngTemplateOutlet]="template", [ngOutletContext]="content">
  </template>
  bbb
</div>
<div style="background-color: #0cb6e7">
sss
</div>
    
    <!--<ng-template *ngIf="hasStartTemplate"-->
                 <!--[ngTemplateOutlet]="template"-->
                 <!--[ngTemplateOutletContext]="description"></ng-template>-->
`
})
export class TemplateChildComponent {

  @Input()
  private template: TemplateRef<any>;
  private counter: number = 0;

  constructor(private container: ViewContainerRef) {
  }

  get hasStartTemplate() {
    return this.template;
  }

  content = {description: {desc: 'child sweet', count: this.counter++, color: "yellow"}};

  btnClicked(val) {
    console.log("child ", val);
  }

  onClick() {


    this.content.description.count = this.counter;
    this.container.createEmbeddedView(this.template,{description: {desc: 'child sweet', count: this.counter, color: "yellow"}});
    this.counter++;

  }
}

