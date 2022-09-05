<template>
	<view>
		{{id}}
	</view>
</template>

<script>
	export default{
		data(){return{
			id:"",
		}},
		
		// 进入页面
		onLoad(event) {
			if (event.id) {
				this.id = event.id
				this.getCardDetail(event.id)
			}
			
		},
		
		
		methods:{
			 // 获取卡片的详情
			 async getCardDetail(id){
				 let obj = {id:""}
				 obj.id = id
			 	const secondHandList = uniCloud.importObject('secondHandList')
			 	let res = await secondHandList.getCardDetail(obj)
				console.log("aaaaaaaaaaaaaa",res)
			 	if(res.errCode==0){
					console.log("aaaaaaaaaaaaaa",res.data)
					this.id = res.data
			 	}
			 	
			 },
		},
	}
</script>

<style scoped>
	
</style>
