<template>

		<view class="">
			<uni-forms :modelValue="formData" label-position="top" style="margin: 0 20rpx;">
				<uni-forms-item required label="闲置标题" name="title">
					<uni-easyinput type="text" v-model="formData.title" placeholder="请输入标题" />
				</uni-forms-item>
				<uni-forms-item required label="详情" name="detail">
					<uni-easyinput type="textarea" v-model="formData.detail" placeholder="请输入宝贝详情 " />
				</uni-forms-item>
				<uni-forms-item required name="price" label="价格">
					<uni-number-box :min="0" :max="9999" v-model="formData.price"></uni-number-box>
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
					imageValue:[],
					formData:[],
				}
			},
			methods:{
				// 获取上传状态
				select(e){
					console.log('选择文件：',e)
				},
				// 获取上传进度
				progress(e){
					console.log('上传进度：',e)
				},
				
				// 上传成功
				success(e){
					console.log('上传成功')
				},
				
				// 上传失败
				fail(e){
					console.log('上传失败：',e)
				}
			}
		}
	</script>
<style>
</style>