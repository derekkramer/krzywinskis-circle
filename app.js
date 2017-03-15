$.get('https://helloacm.com/api/pi/?n=1000000')
.then(function(pi) {
    pi = pi.slice(1)

    var circos = new Circos({
        container: '#chart',
        width: 1000,
        height: 900
    })

    var colors = [
        '#1B4357',
        '#4AA2E1',
        '#48741E',
        '#66D45E',
        '#650402',
        '#E71B1C',
        '#905102',
        '#FF7E00',
        '#40264F',
        '#9364C2'
    ]

    var layout = [{
        'id': '0',
        'label': '0',
        'color': colors[0],
        'len': 1000
    },
    {
        'id': '1',
        'label': '1',
        'color': colors[1],
        'len': 1000
    },
    {
        'id': '2',
        'label': '2',
        'color': colors[2],
        'len': 1000
    },
    {
        'id': '3',
        'label': '3',
        'color': colors[3],
        'len': 1000
    },
    {
        'id': '4',
        'label': '4',
        'color': colors[4],
        'len': 1000
    },
    {
        'id': '5',
        'label': '5',
        'color': colors[5],
        'len': 1000
    },
    {
        'id': '6',
        'label': '6',
        'color': colors[6],
        'len': 1000
    },
    {
        'id': '7',
        'label': '7',
        'color': colors[7],
        'len': 1000
    },
    {
        'id': '8',
        'label': '8',
        'color': colors[8],
        'len': 1000
    },
    {
        'id': '9',
        'label': '9',
        'color': colors[9],
        'len': 1000
    }]

    var data
    var speed = 990

    circos
        .layout(
            layout, {
                innerRadius: 400,
                outerRadius: 410,
                labels: {
                    radialOffset: 40,
                    size: '20px',
                    color: '#606060'
                },
                ticks: {
                    display: false
                }
            }
        )
        .render()

    var i = 0

    function drawCircos() {
        var pos = parseInt(i)
        var num = parseInt(pi[pos])
        var id = 'c' + i.toString()
        var rand = Math.floor(Math.random() * 990)

        chrome.runtime.onMessage.addListener(function(request){
            speed = Math.abs(request.message - 1000)
        })

        data = [{
            source: {
                id: pi[pos],
                start: rand,
                end: rand + 10
            },
            target: {
                id: pi[pos + 1],
                start: rand,
                end: rand + 10
            }
        }]

        circos.chords(
                id,
                data, {
                    logScale: false,
                    opacity: 1,
                    color: colors[num]
                }
            )
            .render()

        i++

        if (i < pi.length - 1) {
            setTimeout(drawCircos, speed)
        }
    }

    setTimeout(drawCircos, speed)
})
