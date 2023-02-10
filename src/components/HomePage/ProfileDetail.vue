<template>
  <div class="profile">
    <div class="profile__img">
        <img src="../../assets/unknown.jpg" alt="">
    </div>

    <div class="profile__detail">
        <div class="profile__detail-first">
            <span class="no1">{{ user.displayName }}</span>
            <span class="no2">Edit Profile</span>
            <span class="no3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></span>
        </div>
        <div class="profile__detail-second">
            <span class="no1">0 posts</span>
            <span class="no2">0 followers</span>
            <span class="no3">2 following</span>
        </div>
        <div class="profile__detail-username">
            <span>{{ user.displayName }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getUser from '../../composables/getUser';
export default {
    setup() {
        let {user} = getUser();
        return {user}
    }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 800px;
    height: 240px;
    margin: 20px auto;
    display: flex;
    border-bottom: 1px solid #000;

    &__detail {
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-first {
            display: flex;
            justify-content: space-around;
            padding: 20px;
            align-items: center;
            gap: 10px;
            .no2 {
                background: #828282;
                border-radius: 5px;
                color: white;
                padding: 10px 20px;
            }
        }
        &-second {
            font-weight: bold;
            display: flex;
            justify-content: space-around;
            padding: 20px;
            gap: 10px;
        }
        &-username {
            font-weight: bold;
            font-size: 1.2rem;
            display: flex;
            padding: 20px;  
            margin-left: 43px;
        }
    }

    &__img {
        img {
            border-radius: 50%;
            width: 230px;
        }
    }
}
</style>