/**
 * Created by Administrator on 15-11-22.
 */
/*
* nextTick  setTimeout  两者效果差不多
* process.nextTick 比 process.setTimeout 性能高的多
* nextTick 优先级高 nextTick 队列会在完全执行完才调用IO操作
* 因此
* */


/*
* 执行的优先级
* 同步操作 > tick > setImmediate > IO操作（readFile）
*
*
* */