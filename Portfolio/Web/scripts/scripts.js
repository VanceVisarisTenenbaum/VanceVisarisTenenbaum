
function get_y_pos(div){
    let rect = div.getBoundingClientRect();
    return rect.y;
}

function get_top_bot_pos(div) {
    let rect = div.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom };
}


function check_same_y_pos(div1, div2) {
    if (div1.id === div2.id){return true;}


    let { top: t1, bottom: b1 } = get_top_bot_pos(div1);
    let { top: t2, bottom: b2 } = get_top_bot_pos(div2);

    //We check if one is below the other
    if (b1 < t2 || b2 < t1){return false;}

    //We check if one is within the other
    if (
        (t1 < t2 && b2 < b1)
        ||
        (t2 < t1 && b1 < b2)
    ){return true;}

    let min_top = Math.min(t1,t2);
    let max_bot = Math.max(b1,b2);
    let max_dist = max_bot-min_top;

    let max_top = Math.max(t1,t2);
    let min_bot = Math.min(b1,b2);
    let min_dist = min_bot-max_top;

    let ratio = min_dist/max_dist;


    if (ratio>=0.5){return true;}
    return false;
}

function get_cards_with_same_y_pos(card_to_match){
    let cards = document.querySelectorAll('.card');
    
    let list = [];
    for (let i=0; i<cards.length; i++){
        let card = cards[i];
        if (check_same_y_pos(card,card_to_match)){
            if (card.id === card_to_match.id){}
            else {list.push(card);}
        }
    }
    
    return list;
}



function display_description(card,continue_recursion=false){
    
    let description = card.querySelector('.descripcion');
    let display_val = description.style.display;
    if (display_val === 'block'){
        description.style.display = 'none';
    }
    else if (display_val === 'none'){
        description.style.display = 'block';
    }
    else if (!display_val){
        description.style.display = 'block';
    }

    if (continue_recursion){
        let same_y_cards = get_cards_with_same_y_pos(card);
        for (let i=0; i<same_y_cards.length; i++){
            display_description(same_y_cards[i],false);
        }
    }
}

function set_click_card(card_ob){
    card_ob.addEventListener(
        'click',
        function() {
            if (!card_ob.classList.contains('tech-card')){
                display_description(card_ob,true)
            }
        }
    );
}

document.querySelectorAll('.card').forEach(set_click_card);


function set_to_open_new_tab_anchor(anchor){
    anchor.setAttribute("target","_blank");
    anchor.setAttribute("rel","noopener noreferrer");
}


document.querySelectorAll('a').forEach(set_to_open_new_tab_anchor);