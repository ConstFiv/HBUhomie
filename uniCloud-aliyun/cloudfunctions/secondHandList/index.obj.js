
function getCurrentTime() {
    var date = new Date();//当前时间
    var year = date.getFullYear() //年
    var month = repair(date.getMonth() + 1);//月
    var day = repair(date.getDate());//日
    var hour = repair(date.getHours());//时
    var minute = repair(date.getMinutes());//分
    var second = repair(date.getSeconds());//秒
    
    //当前时间 
    var curTime = year + "-" + month + "-" + day
            + " " + hour + ":" + minute + ":" + second;
    return curTime;
}

//若是小于10就加个0
function repair(i){
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}


module.exports = {
	// 获取全部二手列表信息  @requestTime请求次数
	async getCardsInfo(requestTime,searchText){
		if(requestTime==undefined || requestTime==null){
			return {
				errCode:-1,
				message:"缺少参数requestTime!",
				data:[],
			}
		}
		
		console.log("searchText",searchText)
		const db = uniCloud.database()
		// 普通查询
		if(!searchText){
			const cardsInfoData = db.collection('fiv-test-list')
			.skip(10*requestTime)
			.limit(10)
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
		}else{
		// 条件查询
		var find = {title: new RegExp(searchText)}
		const cardsInfoData = db.collection('fiv-test-list')
		.where(find)
		.skip(10*requestTime)
		.limit(10)
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
		
		}
		
		
	},
	
	

	
	
	
	
	// 上传新的二手资料
	async addCardInfo(formData){
		let testData = formData
		testData["userName"] = "不吃管理员的芹菜"
		testData["avatar"] = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F91%2F81%2Fd7%2F9181d7d8787f7e96f0017da5e61ad27d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664431863&t=0c9fda060034957c2a98e5998db7a5e7"
		
		// 获取时间进行更新
		testData["updateTime"] = getCurrentTime()
		
		console.log("testData",testData)
		const db = uniCloud.database()
		let res = await db.collection('fiv-test-list').add(testData)
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
	
	
	// 根据ID获取某个卡片的详情
	async getCardDetail(obj){
		const db = uniCloud.database()
		const cardsDetailData = db.collection('fiv-test-list').where({_id : obj.id})
		let res = await cardsDetailData.get()
		if(res){
			res.errCode = 0
			res.data = res.data[0]
			return res
		}else{
			return {
				errCode:-1,
				message:"数据库查询错误",
				data:[],
			}
		}
		
	},
}