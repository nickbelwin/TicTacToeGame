var p1='Player1';
var p2='Player2';
var aer=document.getElementsByClassName('row');
var count=0;
var player1=0;
var player2=0;
var arrPlayer1=[0,0,0,0,0,0,0,0,0];
var arrPlayer2=[0,0,0,0,0,0,0,0,0];
function check(arr){
    if(arr[0] == 1 && arr[1] == 1 && arr[2]==1){
        return true;
    }
    else if(arr[3] == 1 && arr[4] == 1 && arr[5]==1){
        return true;
    }
    else if(arr[6] == 1 && arr[7] == 1 && arr[8]==1){
        return true;
    }
    else if(arr[0] == 1 && arr[3] == 1 && arr[6]==1){
        return true;
    }
    else if(arr[1] == 1 && arr[4] == 1 && arr[7]==1){
        return true;
    }
    else if(arr[2] == 1 && arr[5] == 1 && arr[8]==1){
        return true;
    }
    else if(arr[0] == 1 && arr[4] == 1 && arr[8]==1){
        return true;
    }
    else if(arr[2] == 1 && arr[4] == 1 && arr[6]==1){
        return true;
    }
    else{
        return false;
    }
}
for(var i=0; i<aer.length; i++){
    aer[i].onclick= function(){
        var g=this.id;
        var b=Number(g);
        if(this.getAttribute('checked') != 'true'){
            this.setAttribute('checked', 'true');
            count++;
            if(count%2==0){
                player1++;
                this.innerHTML='X';
                arrPlayer1[b-1]=1;
                if(player1>=3){
                    if(check(arrPlayer1)){
                        alert('Congratulations! Player2 wins');
                        window.location.reload(false);
                    }
                }
            }
            else{
                player2++;
                this.innerHTML='O';
                arrPlayer2[b-1]=1;
                if(player2>=3){
                    if(check(arrPlayer2)){
                        alert('Congratulations! Player1 wins');
                        window.location.reload(false);
                    }
                }
            }
            if(count==9){
                alert('Draw!');
                window.location.reload(false);
            }
        }
    }
}