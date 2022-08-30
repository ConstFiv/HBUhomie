
module.exports = {
	
	// 获取全部二手列表信息  @requestTime请求次数
	async getCardsInfo(requestTime){
		if(requestTime==undefined || requestTime==null){
			return {
				errCode:-1,
				message:"缺少参数requestTime!",
				data:[],
			}
		}
		
		const db = uniCloud.database()
		const cardsInfoData = db.collection('fiv-sale-list').skip(5*requestTime).limit(5)
		let  res = await cardsInfoData.get()
		if(res){
			res.errCode = 0
			return res
		
		}else{
			return {
				errCode:-1,
				message:"数据库查询错误",
				data:[],
			}
		}
		
	},
	
	
	// 上传新的二手资料
	async addCardInfo(formData){
		let testData = formData
		testData["userName"] = "不吃管理员的芹菜"
		testData["avatar"] = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F91%2F81%2Fd7%2F9181d7d8787f7e96f0017da5e61ad27d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664431863&t=0c9fda060034957c2a98e5998db7a5e7"
		
		console.log("testData",testData)
		const db = uniCloud.database()
		let res = await db.collection('fiv-sale-list').add(testData)
		if(res){
			res.errCode = 0
			return res
		
		}else{
			return {
				errCode:-1,
				message:"数据库查询错误",
				data:[],
			}
		}
		
	}
}
