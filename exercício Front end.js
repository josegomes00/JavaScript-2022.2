var i, altura, sexo, maior = 0, menor = 0, h = 0, m = 0, media_m = 0, cont_m = 0, cont_h = 0;

            for(i = 1 ;i <= 15; i++) {        

                altura = parseInt(prompt("Informe sua altura["+i+"]:"));

                sexo = prompt("Informe o Sexo: M ou F:");

                if(i == 1) {

                    menor = altura;

                } if(altura > maior) {

                    maior = altura;

                } if(altura < menor) {

                    menor = altura;

                } if(sexo == 'M') {

                    h += altura;

                    cont_h++;

                } else if(sexo == 'F') {

                    m += altura;

                    cont_m++;

                }

            }

            media_h = h/cont_h;

            alert("A maior altura do grupo é: "+maior);

            alert("A menor altura do grupo é: "+menor);

            alert("A média da altura dos homens é: "+media_h);

            alert("O número de mulheres é: "+cont_m);