<template>
    <div>
        <a class="btn-flat-border" @click="$emit('set')" >{{flatBtnText}}</a>
    </div>    
</template>
<script>
export default {
    props:{
        flatBtnText : ''
    }    
}
</script>
<style>
    .btn-flat-border {
        display: inline-block;
        padding: 0.3em 1em;
        text-decoration: none;
        color: #67c5ff !important;
        border: solid 2px #67c5ff;
        border-radius: 3px;
        transition: .4s;
    }

    .btn-flat-border:hover {
        background: #67c5ff;
        color: white !important;
    }
</style>
