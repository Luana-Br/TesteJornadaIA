export default {    
    jump: new KeyboardEvent('keydown', { key: 'Space', keyCode: 32 }),
    dispatch() {        document.dispatchEvent(this.jump);
    }
}