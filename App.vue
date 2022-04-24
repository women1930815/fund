<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*每个页面公共css */
	@import url("./basics/css/flex.css");

	@mixin basic {
		max-width: 750px;
		margin: 0 auto;
	}

	body {
		@include basic;
	}
</style>
