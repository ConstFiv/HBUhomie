<template>
	<view class="cardAll">
		<div class="topBar">
			<img class="avatar"  :src="cardData.avatar" alt="">
			<div class="userName">{{cardData.userName}}</div>
		</div>
		<div class="priceBar">
			<span style="font-size: 14rpx;"> ￥</span>{{cardData.price}}
		</div>
		<div class="contentPlace">
			<div class="detail"> 
				{{cardData.detail}}
			</div>
			<div class="imageOutSider">
				<div v-for="(item,index) in cardData.imgList" :key="'img'+index">
					<img  :src="item.path" alt="">
				</div>
					
			</div>
		</div>
	</view>
</template>

<script>
	export default{
		data(){return{
			cardData:"",
		}},
		
		// 进入页面
		onLoad(event) {
			if (event.id) {
				this.getCardDetail(event.id)
			}
			
		},
		
		
		methods:{
			 // 获取卡片的详情
			 async getCardDetail(id){
			 	const secondHandList = uniCloud.importObject('secondHandList')
			 	let res = await secondHandList.getCardDetail({id:id})
				console.log("aaaaaaaaaaaaaa",res)
			 	if(res.errCode==0){
					console.log("aaaaaaaaaaaaaa",res.data)
					this.cardData = res.data
			 	}
			 	
			 },
		},
	}
</script>

<style scoped lang="scss">
	.cardAll{
		overflow: scroll;
	}
	
	
	.topBar{
		height: 100rpx;
		width: 100%;
		.avatar{
			height: 60rpx;
			width: 60rpx;
			margin: 20rpx 20rpx 0 20rpx;
			border-radius: 50%;
			float: left;
		}
		.userName{
			font-size: 20rpx;
			font-weight: 900;
			line-height: 100rpx;
			float: left;
		}
	}	
	
	.priceBar{
		height: 50rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 900;
		line-height: 50rpx;
		color: red;
		padding-left:20rpx ;
	
	}
	
	.contentPlace{
		width: 100%;	
		padding: 0 20rpx;
		box-sizing: border-box;
		.detail{
			min-height: 200rpx;
			width: 100%;
			font-size: 16rpx;
			line-height: 40rpx;
		}
		.imageOutSider{
			width: 100%;
			overflow: hidden;
			border-radius: 10rpx;
			img{
				width: 100%;
			}
			.lineTwo{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				img{
					width: 100%;
					
				}
			}
		}
	}
</style>
