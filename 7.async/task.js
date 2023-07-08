class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.some(element => element.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		let alarm = {
			callback: callback,
			time: time,
			canCall: true
		}

		this.alarmCollection.push(alarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(element => element.time !== time)
	}

	getCurrentFormattedTime() {
		let currentDate = new Date();
		let hours = currentDate.getHours();
		hours = (hours < 10) ? '0' + hours : hours;
		let minutes = currentDate.getMinutes();
		minutes = (minutes < 10) ? '0' + minutes : minutes;
		return (String(hours) + ":" + String(minutes));
	}

	start() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				let currentTime = this.getCurrentFormattedTime();
				this.alarmCollection.forEach((alarm) => {
					if (alarm.time === currentTime && alarm.canCall) {
						alarm.canCall = false;
						alarm.callback();
					}
				});
			}, 1000);
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}