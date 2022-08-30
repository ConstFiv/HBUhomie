<template>

		<view class="">
			<uni-forms :rules="rules" :modelValue="formData" label-position="top" style="margin: 0 20rpx;">
				<uni-forms-item required label="闲置标题" name="title">
					<uni-easyinput type="text" v-model="formData.title" placeholder="请输入标题" />
				</uni-forms-item>
				<uni-forms-item required label="详情" name="detail">
					<uni-easyinput type="textarea" v-model="formData.detail" placeholder="请输入宝贝详情 " />
				</uni-forms-item>
				<uni-forms-item required name="price" label="价格">
					<uni-easyinput type="text" v-model="formData.price" placeholder="请输入期望售价" />
				</uni-forms-item>
				<uni-file-picker
					v-model="imageValue"  
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="9"
						@progress="progress" 
						@success="success" 
						@fail="fail" 
						@select="select"
				/>
			</uni-forms>
			<button @click="submitForm">发布</button>
		</view>
		

	
	
</template>

<script>
		export default {
			data() {
				return {
					imageValue:[
						{
							"name":"file.txt",
							"extname":"txt",
							"url":"https://xxxx",
			
						}
					],
					formData:{},
					
					// 进行表单校验
					rules: {
			
						title: {
							rules: [{required: true,errorMessage: '请输入标题'},
								{minLength: 1,maxLength:10,errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',}
							]
						},
				
						title: {
							rules: [{required: true,errorMessage: '请输入标题'},
								{minLength: 1,maxLength:10,errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',}
							]
						},
					},
			}},
			
			
			methods:{
				// 获取上传状态
				select(e){
					// console.log('选择文件：',e)
				},
				// 获取上传进度
				progress(e){
					// console.log('上传进度：',e)
				},
				
				// 上传成功
				success(e){
					console.log('上传成功',e)
				},
				
				// 上传失败
				fail(e){
					console.log('上传失败：',e)
				},
				
				// 提交
				submitForm(){
						
				},
			}
		}
	</script>
<style scoped>

</style>