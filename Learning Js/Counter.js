/**
 We'll continue yesterday's unfinished problem, but in stages.
- Stage 1: Create a counter with increment() and getValue().
- Stage 2: Add decrement().
- Stage 3: Use setTimeout() to reset the counter.
- Stage 4: Use clearTimeout() so each change restarts the timer.
- Stage 5: Add onReset(callback).
You don't need to complete all five stages at once. We'll check your understanding after each stage.
 */

class counter{
  constructor(x, initial_value = x,timer=null){
    this.x=x;
    this.initial_value=initial_value;
    this.timer =timer;
  }
  onreset(){
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
    this.reset();
}, 2000);
  }
  increment (){
    ++this.x;
    this.onreset()
    return this.x
  }
  getValue(){
    return this.x
  }
  decrement(){
    --this.x;
    this.onreset()
    return this.x
  }
 reset(){
      this.x=this.initial_value;
      console.log(`counter reset to ${this.x}`)
 }
}
const counterC =new counter(5);
console.log(counterC.increment()); 
console.log(counterC.getValue())

