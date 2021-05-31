import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, ɵɵtrustConstantResourceUrl } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //     return new Promise((success, fail) => {
  //         setTimeout( () => fail('Ki lo ba li')
  //                     , 2000);
  //     })
  // }


  //     let pany = Promise.race([p1, p2]);
  //     let resAny = await pany;




  //     console.log(resAll);
  // }
  private delay(time: number): Promise<number> {
    return new Promise(
      (resolve, reject) =>
       // setTimeout(() => resolve(123), time)   // same as next line
        setTimeout(() => resolve(123), time)
    );
  }

  async go() {

    // console.log("Here we go!");
    // let msg = await this.verySlowHello();
    // console.log(msg);

    // let p =  this.delay(2000);  // in .net => Task.delay(2000)
    // let res = await p;
    // console.log(`Hi from ${res}.`); //=> p.continueWith(blabla)

      let p1 = this.delay(2000);
      let p2 = this.verySlowHello();
      
      // let pall = Promise.all([p1,p2]);
      // let resAll = await pall;
      // console.log(resAll);

      let pany = Promise.race([p1, p2]);
      let resAny = await pany;


      console.log(resAny);
  }

  private async verySlowHello():Promise<string>{

    await this.delay(2000);
    return "Very Slow hellooo";
  }

}
