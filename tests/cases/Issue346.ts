function f()
{
	let t = 0
	let TAU440 = Math.PI*2 * 440

	onmessage = function(e)
	{
		let b = new Float64Array(e.data.bufferSize)
		let s = e.data.sampleRate

		for (let i = 0; i < b.length; i++) b[i] = Math.sin(TAU440 * t++^^/s * Math.sin(t++^^/s*.5))

		postMessage(b)
	}
}

let a = new AudioContext()
let s = a.createScriptProcessor(0,1,1)
let b = new Float64Array(s.bufferSize)
let w = new Worker(URL.createObjectURL(new Blob(["("+f+"())"],{type:"application/javascript"})))

w.onmessage = e => b = e.data
s.connect(a.destination)

s.onaudioprocess = function(e)
{
	w.postMessage({ bufferSize: s.bufferSize, sampleRate: a.sampleRate })
	e.outputBuffer.getChannelData(0).set(b)
}