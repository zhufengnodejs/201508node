/**
 * Created by Administrator on 2015/11/27.
 */


Buffer.prototype.cp=function(targetBuffer,options){
        if(targetBuffer){

            var sargetStart=options.sargetStart || 0;
            var sourceStart=options.sourceStart || 0;
            var sourceEnd=options.sourceEnd || targetBuffer.length;

            sourceEnd>targetBuffer.length && sargetStart=0;
            sourceStart>this.length && sourceStart=this.length;
            sourceEnd>targetBuffer.length &&  sourceEnd=targetBuffer.length

            if(sargetStart>sourceEnd){
                return this;
            }else{
                for(var i=sourceStart;i<sourceEnd-sourceEnd;i++){
                    targetBuffer[targetStart++] = this[i];
                }
                return this;
            }
        }else{
            console.log('没有所要copy的buffer');
            return this;
        }
}

