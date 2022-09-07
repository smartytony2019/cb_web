
<template>
  <div class="about">
    <div class="editor_container">
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
      />
      <input v-model="texts" type="text">
      <button type="button" @click="onclickForm">提交</button>
    </div>

    <div v-html="content" />

    <div class="upload_list">
      <img
        id="base64Img"
        class="layui-upload-img"
        name="titleBase64Img"
        :src="headImg"
      >
      <div class="fileInput">
        <input
          id="Updateimage"
          class="uploadImg"
          type="file"
          lay-verify="required"
          accept="image/jpeg, image/png, image/jpg"
          @change="toBase64()"
        >
      </div>
    </div>
    <img :src="base64Img">
  </div>
</template>
<script>
/* eslint-disable */
/**
 * npm install quill --save
 * npm install vue-quill-editor --save
 */
import {quillEditor} from "vue-quill-editor" //调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'about',
  components: {quillEditor},
  data() {
    return {
      content: '',
      texts: '',
      // 编辑器配置
      editorOption: {
        placeholder: '在这里输入内容',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], //  加粗、倾斜、下划线、删除线
            ['blockquote', 'code-block'],// 引用代码块
            [{'header': 1}, {'header': 2}], // 标题，键值对应的形式，1，2 表示字体大小
            [{'list': 'ordered'}, {'list': 'bullet'}], // 列表
            [{'script': 'sub'}, {'script': 'super'}], // 上下标
            [{'indent': -1}, {'indent': +1}], // 缩进
            [{'direction': 'rtl'}], // 文本方向
            [{'size': ['small', false, 'large', 'huge']}], // 字体大小
            [{'header': [1, 2, 3, 4, 5, 6, false]}], // 几级标题
            [{'color': []}, {'background': []}], // 字体颜色，字体背景颜色
            [{'font': []}], // 字体
            [{'align': []}], // 对齐方式
            ['clean'], //清除
            ['image', 'video'], // 上传图片、上传视频
          ]
        }
      },
      
      headImg:"",
      imageUrl: "",
      type:'',
      base64Img: require("@/assets/logo.png")
    }
  },
  mounted() {
    let content = ''; // 请求返回值
    this.str = this.escapeStringHTML(content)
  },
  methods: {
    // 转码
    escapeStringHTML(str) {
      str = str.replace(/</g, '<');
      str = str.replace(/>/g, '>');
      return str
    },
    onclickForm() {
      console.log(this.content)
      // this.content = ''
      // this.str = this.escapeStringHTML(this.content)
    },
    toBase64(){
      var file = document.querySelector('input[type=file]').files[0];
      console.log(document.getElementsByClassName("uploadImg")[0].files[0])
      console.log("base64",file)
      return;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  }
}
</script>
<style scoped>
.editor_container /deep/ .ql-editor {
  min-height: 300px;
}
</style>