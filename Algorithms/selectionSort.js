async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        if(hasPressedStop==true){
            return;
        }
        let min_index = i;
        // Change color of the bar being compared
        ele[i].style.background = 'lightGreen';
        for(let j = i+1; j < ele.length; j++){
            if(hasPressedStop==true){
                return;
            }
            // Change color of current bar
            ele[j].style.background = 'cyan';

            await delayTime(delay);
            if(hasPressedStop==true){
                return;
            }
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'violet';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'violet';
            }   
        }
        await delayTime(delay);
        if(hasPressedStop==true){
            return;
        }
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'violet';
        // change the sorted elements color to MediumSeaGreen
        ele[i].style.background = 'MediumSeaGreen';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await selection();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
