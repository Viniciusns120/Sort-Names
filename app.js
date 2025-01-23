//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendList = [];
let friendsName = ''
let sortedName = ''
let friend = ''

function getFriend() {
    friendsName = document.querySelector('input').value;
    if (friendsName.valueOf() == '') {
        alert('Please give a correct name');
        return;
    } else if (friendList.includes(friendsName.valueOf())) {
        alert('Friend already added');
        return;
    }
    putOnList(friendsName);
    clearInput();
}

function putOnList(friendsName) {
    friend = friendsName;
    friendList.push(friend);
    // to insert a list in HTML for each element in friendList
    friend = document.getElementById('listaAmigos');
    friend.innerHTML = '';
    for(let i = 0; i < friendList.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = friendList[i];
        friend.appendChild(li);
    }
}

function clearInput() {
    friendsName = document.querySelector('input');
    friendsName.value = ''
}

function sortFriend() {
    sortedName = friendList[parseInt(Math.random() * friendList.length)];
    removeSortedName = sortedName
    if (friendList == '') {
        alert('Add a friend name first');
        return;
    }
    sort = document.getElementById('resultado');
    sort.innerHTML = `O nome do seu amigo secreto é: ${sortedName}`;
    removeSortedFriend(removeSortedName);
}

function removeSortedFriend() {
    friendList = friendList.filter(sortedName => sortedName !== removeSortedName)
}
