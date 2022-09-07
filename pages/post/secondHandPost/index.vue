<template>

		<view class="formOutSider">
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
					:imageStyles="imageStyles"
						title="上传图片"
						file-mediatype="image"
						mode="grid"
						:limit="3"
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
					imageStyles: {
								width: 64,
								height: 64,
								border: {
									radius: '50%'
								}
								},
					formData:{},
					
					// 进行表单校验
					rules: {
			
						title: {
							rules: [{required: true,errorMessage: '请输入标题'},
								{minLength: 1,maxLength:10,errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',}
							]
						},
				
						detail: {
							rules: [{required: true,errorMessage: '请输入宝贝详情'}
							]
						},
						
						price: {
							rules: [{required: true,errorMessage: '请输入宝贝价格'}
							]
						},
					},
			}},
			
			
			methods:{
				// 清除表单残留
				clear(){
					this.imageValue = []
					this.formData = {}
				},
				// 获取上传状态
				select(e){
					console.log('选择文件：',e)
					
					uni.showLoading({
					    title: '图片正在压缩上传...'
					})
							
				},
				// 获取上传进度
				progress(e){
					
				},
				
				// 上传成功
				success(e){
					this.formData['src'] = e.tempFilePaths["0"] || null					
					uni.hideLoading();
				},
				
				// 上传失败
				fail(e){
					uni.hideLoading();
					console.log('上传失败：',e)
				},
				
				// 提交
				async submitForm(){
					uni.showLoading({
					    title: '正在提交数据...'
					})
					this.formData["imgList"] = this.imageValue
					const secondHandList = uniCloud.importObject('secondHandList')
					let res = await secondHandList.addCardInfo(this.formData)
					if(res.errCode==0){
						this.clear()
						uni.showToast({
							title:"提交成功！",
							duration:1000,
						})
						uni.hideLoading();
						uni.switchTab({
							url: "/pages/list/list",
							animationType: 'fade-in'
						})
					}
				},
				},
				
				
		}
	</script>
<style scoped>
.formOutSider{
	margin: 0 20rpx;
}
</style>