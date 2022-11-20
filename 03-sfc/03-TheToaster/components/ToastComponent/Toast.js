export class Toast {
  constructor() {
    this.index = Math.round(Math.random() * 100000);
    this.visible = true;
    this.init();
  }

  init() {
    if (this.constructor === Toast) {
      throw new Error('Abstract class is not for using!');
    }
  }
}

export class ToastError extends Toast {
  constructor() {
    super();
    this.type = 'error';
  }
}
export class ToastSuccess extends Toast {
  constructor() {
    super();
    this.type = 'success';
  }
}
