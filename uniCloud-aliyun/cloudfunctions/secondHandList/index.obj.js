
module.exports = {
	
	// 获取全部二手列表信息  @requestTime请求次数
	async getCardsInfo(requestTime){
		console.log("获取全部二手列表信息  @requestTime请求次数",requestTime)
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
			// 每次取表中的指定项
			// if(res.data.length>=requestTime*5) res.data = res.data[requestTime-1,requestTime*5-1]
			// else  res.data = res.data[requestTime-1,res.data.length-1]
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
