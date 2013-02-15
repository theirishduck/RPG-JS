Class.create("Game_System", {

	_current: {
		bgm: null,
		bgs: null,
		se: null,
		me: null
	},
	_memorize: {
		bgm: null,
		bgs: null
	},

	bgmPlay: function(id) {
		this._playAudio(id, "bgm");
	},
	
	bgsPlay: function(id) {
		this._playAudio(id, "bgs");
	},
	
	mePlay: function(id) {
		this._playAudio(id, "me");
	},
	
	sePlay: function(id) {
		this._playAudio(id, "se");
	},
	
	seStop: function() {
		if (!this._current.se) {
			return false;
		}
		this._stopAudio(this._current.se, "se");
	},

	memorizeMusic: function() {
		this._memorize.bgm = this._current.bgm;
		this._memorize.bgs = this._current.bgs;
	},
	
	restoreMusic: function() {
		this._stopAudio(this._current.bgm, "bgm");
		this._stopAudio(this._current.bgs, "bgs");
		
		this._playAudio(this._memorize.bgm, "bgm");
		this._playAudio(this._memorize.bgs, "bgs");	
		
	},

	fadeOutMusic: function() {
		var self = this;
		if (this._current.bgm) {
			RPGJS.Sound.get(this._current.bgm).fadeOut(function() {
				self._stopAudio(self._current.bgm, "bgm");
			});
		}
		if (this._current.bgs) {
			RPGJS.Sound.get(this._current.bgs).fadeOut(function() {
				self._stopAudio(self._current.bgs, "bgs");
			});
		}
	},
	
	fadeOutSound: function() {
		var self = this;
		if (this._current.me) {
			RPGJS.Sound.get(this._current.me).fadeOut(function() {
				self._stopAudio(self._current.me, "me");
			});
		}
		if (this._current.se) {
			RPGJS.Sound.get(this._current.se).fadeOut(function() {
				self._stopAudio(self._current.se, "se");
			});
		}
	},

	_playAudio: function(id, type) {
		this._current[type] = id;
		RPGJS.Sound.get(id).play();
	},
	
	_stopAudio: function(id, type) {
		this._current[type] = null;
		RPGJS.Sound.get(id).stop();
	}

})