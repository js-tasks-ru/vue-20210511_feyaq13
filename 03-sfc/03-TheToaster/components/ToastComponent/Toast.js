export class Toast {
  constructor() {
    this.index = Math.round(Math.random() * 100000);
    this.visible = true;
    this.hide = function () {
      this.visible = false;
    };
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
