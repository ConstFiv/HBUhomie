// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	// 获取全部二手列表信息
	async getCardsInfo(){
		const db = uniCloud.database()
		const cardsInfoData = db.collection('fiv-sale-list')
		let  res = await cardsInfoData.get()
		res.errCode = 0
		console.log("获取全部二手列表信息",res)
		return res
		
	}
}
