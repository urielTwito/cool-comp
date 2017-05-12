import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods} from 'angularfire2';
import {firebaseConfig} from "../../app.module";
import {EmailPasswordCredentials} from "angularfire2/auth";

@Component({

  selector: 'firebase-demo',
  styles: [`
   .text{
    cursor: pointer;
   }
  .selected{
    background-color: #3ee9c7;
    cursor: default;
  }
`],
  template: `
<h1> Welcom to Firebase Test</h1>
  <ul style="display: flex;align-items: flex-start; flex-flow: column" >
    <li class="text" *ngFor="let item of items | async" (click)="select(item)" [ngClass]="{selected:item==selectedItem}">
     {{item.$key}} -{{item.name}}- {{item.size}} <button (click)="remove(item)"> Remove</button>
    </li>
  </ul>
  
  
  <h1>{{ selectedItem| json }}</h1>
  <input type="text" #newname placeholder="Name" [value]="selectedItem?.name"/>
  <input type="text" #newsize placeholder="Size"  [value]="selectedItem?.size"/>
  <br />
  <button (click)="add(newname.value,newsize.value)">Add</button>
  <button (click)="update(item.$key,newname.value,newsize.value)">Update Size</button>
`
})
export class ItemListComponent {
  items: FirebaseListObservable<any[]>;
  decisions: FirebaseListObservable<any[]>;
  factTypes: FirebaseListObservable<any[]>;
  private selectedItem: any;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/items'/*,{ preserveSnapshot: true }*/);
    this.decisions = af.database.list('/decisions'/*,{ preserveSnapshot: true }*/);
    this.factTypes = af.database.list('/factTypes'/*,{ preserveSnapshot: true }*/);
    af.auth.login({
        email: 'uriel.t@sapiens.com',
        password: 'qwerty',
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then(f => {
        console.log(f);
      });
    this.factTypes.$ref.on("child_added", (f)=>{
      console.log("Child Added", f.val());
    });
    this.factTypes.$ref.on("child_removed", (f)=>{
      console.log("Child child_removed", f.val());
    });
    this.factTypes.subscribe(s=>{
      console.log("sssss",s)
    });
  }


  add(name, size) {
    this.items.push({name: name, size: size});
    this.findFactType(name).once("value",(val)=>{
      if(!val.exists()){
        this.factTypes.push({name: name});
      }
      this.findFactType(name).once("value",(ft)=>{

        ft.forEach(data=> {
          this.decisions.push({factType: {id: data.key}});
          return true;
        });
      });
    });
    // let sub = this.findFactType(name).subscribe(ft=>{
    //   sub.unsubscribe();
    //   if(ft.length == 0){
    //     this.factTypes.push({name: name});
    //   }
    //   sub = this.findFactType(name).subscribe(ft=>{
    //     this.decisions.push({factType: {id: ft[0].$key}});
    //     sub.unsubscribe();
    //   })
    // });
  }
  findFactType(name:string){
    return this.factTypes.$ref.orderByChild("name").limitToFirst(1).equalTo(name);
    // return this.af.database.list('/factTypes'
    //   , {
    //     query: {
    //       orderByChild: 'name',
    //       limitToFirst: 1,
    //       equalTo: name
    //     }
    //   }
    // )
  }
  remove(item) {
    this.items.remove(item);
  }

  update(key, name, newSize: string) {
    this.items.update(this.selectedItem.$key, {name: name, size: newSize});
  }

  select(item) {
    this.selectedItem = item;
    console.log("selected", item);
  }
}
