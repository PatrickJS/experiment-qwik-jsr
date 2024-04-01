import { Signal } from "@patrickjs/signals";

export class Counter {
  #value: Signal.State<number>;
  constructor(initialValue = 0) {
    this.#value = new Signal.State(initialValue);
  }

  get value() {
    return this.#value;
  }

  increment() {
    this.#value.set(this.#value.get() + 1);
  }

  decrement() {
    if (this.#value.get() > 0) {
      this.#value.set(this.#value.get() - 1);
    }
  }
}
