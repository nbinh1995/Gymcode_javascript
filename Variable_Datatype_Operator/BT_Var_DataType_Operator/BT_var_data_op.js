/*bai 1*/
function task_1(){
    let physics, chemistry, biology;
    physics = parseInt(prompt('Nhập điểm vật lý của học sinh:'));
    chemistry = parseInt(prompt('Nhập điểm hóa học của học sinh:'));
    biology = parseInt(prompt('Nhập điểm sinh học của học sinh:'));
    let total = physics + chemistry + biology;
    let average = total/3
    document.getElementById('result_1').innerHTML = '<br>Điểm trung bình của học sinh:' + average + '<br>' + 'Tổng điểm 3 môn của học sinh:'+ total +'<br>';  
}
/*bai2*/
function task_2(){
    let Cel, Fah;
    Cel=parseFloat(prompt('Nhập độ C:'));
    Fah = 9*Cel/5-32;
    document.getElementById('result_2').innerHTML ='<br> Độ F tương đương:' + Fah +'<br>';
}
//bai 3
function task_3(){
    const PI = 3.14;
    let rad;
    rad= parseInt(prompt('Nhập bán kính hình tròn:'));
    let area = (rad*rad * PI).toFixed(2);
    document.getElementById('result_3').innerHTML = '<br> Diện tích hình tròn:'+area;
}
//bai 4
function task_4(){
    const PI = 3.14;
    let Rad;
    Rad=parseInt(prompt('Nhập bán kính hình tròn:'));
    let Cir = (2*Rad*PI).toFixed(2);
    document.getElementById('result_4').innerHTML = '<br> Chu vi hình tròn:'+ Cir;
}