<template>
    <div>
        <!-- <div 
            @dragenter.prevent="toggleActive" 
            @dragleave.prevent="toggleActive"
            @dragover.prevent
            @drop.prevent="toggleActive"
            :class="{'active-dropzone': active}"
            class="dropzone"
        >
    
            <span>Drag or Drop File</span>
            <span>Or</span>
            <label for="dropzoneFile">Select File</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile">
        </div>
        <span class="file-info">File: {{dropzoneFile.name}}</span> -->

        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>

    </div>
    
</template>
<script>
import {ref} from "vue";

export default {

    name: "DropZone",
    setup() {
       
       
        const active = ref(false)

        const toggleActive = () => {
            active.value = !active.value;
        }

        return {active, toggleActive};
    }

    
  

}
</script>

<style>
.dropzone {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #000;
    background-color: #fff;
    transition: .3s ease all;
    
}
.dropzone > label {
  padding: 8px 12px;
  color: #fff;
  background-color:#000;
  transition: .3s ease all;
}


.dropzone > input {
    display: none;
}

.active-dropzone {
    color:#fff;
    border-color: #fff;
    background-color: #000;
}
.active-dropzone > label {
  padding: 8px 12px;
  color: #fff;
  background-color:#777;
  transition: .3s ease all;
}


.active-dropzone > input {
    display: none;
}
</style>