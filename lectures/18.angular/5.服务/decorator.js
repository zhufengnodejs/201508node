function greet(){
    console.log('请坐');
}

function moreGreet(){
    greet();
    console.log('请上座');
}

function moreMoreGreet(){
    moreGreet();
    console.log('贵宾');
}

moreMoreGreet();