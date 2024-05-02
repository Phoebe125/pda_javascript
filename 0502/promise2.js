class Promise {
    constructor(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('Executor must be a function');
      }
  
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
  
      const resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
        }
      };
  
      const reject = reason => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      if (this.state === 'fulfilled') {
        return new Promise((resolve, reject) => {
          try {
            const result = onFulfilled(this.value);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
  
      if (this.state === 'rejected') {
        return new Promise((resolve, reject) => {
          try {
            const result = onRejected(this.reason);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
  
      return new Promise((resolve, reject) => {});
    }
  
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  
    finally(onFinally) {
      return this.then(
        value => Promise.resolve(onFinally()).then(() => value),
        reason => Promise.resolve(onFinally()).then(() => {
          throw reason;
        })
      );
    }
  
    static all(iterable) {
      return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
  
        const processResult = (index, value) => {
          results[index] = value;
          completed++;
  
          if (completed === iterable.length) {
            resolve(results);
          }
        };
  
        for (let i = 0; i < iterable.length; i++) {
          const promise = iterable[i];
          if (promise instanceof Promise) {
            promise.then(value => processResult(i, value), reject);
          } else {
            processResult(i, promise);
          }
        }
      });
    }
  
    static race(iterable) {
      return new Promise((resolve, reject) => {
        for (const promise of iterable) {
          if (promise instanceof Promise) {
            promise.then(resolve, reject);
          } else {
            resolve(promise);
          }
        }
      });
    }
  
    static allSettled(iterable) {
      return new Promise((resolve) => {
        const results = [];
        let completed = 0;
  
        const processResult = (index, value, status) => {
          results[index] = { value, status };
          completed++;
  
          if (completed === iterable.length) {
            resolve(results);
          }
        };
  
        for (let i = 0; i < iterable.length; i++) {
          const promise = iterable[i];
          if (promise instanceof Promise) {
            promise.then(
              value => processResult(i, value, 'fulfilled'),
              reason => processResult(i, reason, 'rejected')
            );
          } else {
            processResult(i, promise, 'fulfilled');
          }
        }
      });
    }
  }
  