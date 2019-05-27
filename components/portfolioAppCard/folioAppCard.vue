<template>
    <div class="folioAppCardArea">
        <div class="card shadow" style="width: 20rem;">
            <img class="card-img-top" src="~/static/1.jpg" alt="Card image cap">
            <div class="card-body">
                <p>{{portfolioApp.appName}}</p>
                {{portfolioApp.appId}}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    props:{
        portfolioApp:Object
    }    
}
</script>

<style>
    .folioAppCardArea a{
        text-decoration: none;
        color: black;
    }
</style>
