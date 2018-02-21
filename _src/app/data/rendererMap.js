/* eslint-disable max-len,no-magic-numbers */
define([], () => {
    return {
        rendererInfo: [
            {
                name: 'Electric - Transformer',
                drawingInfo: {
                    labelingInfo: null,
                    renderer: {
                        description: '',
                        label: '',
                        symbol: {
                            angle: 0,
                            contentType: 'image/png',
                            height: 13,
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAALlJREFUOI1jYaASYIExrBiCj3IzsLPgU4zdANZj2xkWFsI1HmNYa9XJsIWBh4GPaEPuMFxieMpwl5+BgaEQxQU6DOYMAgwiJLnoKcNdqMuoBGhv0C+G7wwrGCaiiCkwaDLYMfiTZtBfhn8MMxkqUcTSGdpJN4hUMIQM4mTgYtjD8AVFjJmBiRwXMTJwMnBT7iJSAYpBnxjekqT5C8Mn7AZFMmiQ7JIwhkIMgxhJNoWBgWEVQz+miygBAJCTHjKXO19uAAAAAElFTkSuQmCC',
                            type: 'esriPMS',
                            url: 'a71a3bef8544baa94ff896a76e8a79fb',
                            width: 13,
                            xoffset: 0,
                            yoffset: 0
                        },
                        type: 'simple'
                    },
                    transparency: 0
                }
            },
            {
                name: 'Electric - Power Pole',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '1f547e8fdac0316c6f88c43ddd7135dd',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAVVJREFUGJV1kUtLAmEYhc84n5eGJi8N3tJFmGQF6qYEa6tEJq2C/kLRshaRtIiIoH39haBFRBqRawkh0oxG6bLJQBLSCU1sxkuLGDGsZ/3wHs55Cbq4WMzZP6u1/a9q3U0pKZHpY6JMrLgVQKAFAEQWo+G7tbeX4u6oa0Spc+jRaDZQKBY8rz6yem7N+edOXDwBgFj4Plh6L+/N+KdpmlZ0kpzDThg5kzaVTiXiiA8SACgJwoHX6/4lymjZAVhsFl2Nq28TAJBqoo1l2B5RxsyZwD9m5wkAUEDvyS4UtAJtqa36KUioiiiKBpVK9adcFspQ92syBAAMnP6Qf85tesfcPaIkSXjgnxo259A6AYCFmCdyFEgG09nM5LjDBTlBqHzg5jrVMtuNG7PHrnxn56W4b+o0dLuTSF4to9Fmm81WW81q8iarcSV0NnEJdD1FTgAQ+a/oN6stcTWoh2pHAAAAAElFTkSuQmCC',
                            contentType: 'image/png',
                            width: 8,
                            height: 8,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Electric - Street Light',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '00757bf6ca0d12d196660972f4ec4be2',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAkdJREFUSInNlc1LVFEYxn/vnbGzsUVtDMQKKVsH7QoRFEIpkcpmRjKCAqH+gLpq9HVvQpsIooI2Ecm9l1LEsppFi2r+iHLRKkiDpEDEg3bfFs7Y1RwbxchndTjnfX7nOYfzkeYfKr0p4DdN+EEtexZMWnuR3OSGwWNLWiAFEJOWSjz/d1s8guMg5wR2lfpifg77RHf6yETrgl9jcGsaJwRpBRmBuEeRSaBBoBs09Aly00jXANmZtcAljTMEst8xNLo2U0iMjQG3PYIzgtyrhsfAiYrhPkEXSMsCOFvwTdSI1UvAPuCjs12vu1O5R54JvoiVlx5hRz/ZkQqTy1nQUdfmCp6JmrGap3hSgPp4Slp8EzT12VzeJ3wo6HmgPNwn/Jzo3wFyAUCsuglwSVVY5wbQ7Bh9Flt5nfQ7pA64dE4kk9cuyY5+BcCwE7vS6rQBQMEWJ0/459NLki9XjFMDgGUc2LtCyScAtVJXjrEId5jb9htc9UTQNuABRm5htRVwEr55MVwtrqhdoZBi7mhp0KX7xxK4S/f3UtsjvC/wfMCEh1ybeeeZoE0sl0HqgXE1eqXP5t56JjqI1U4HOZX0/5E8qX6yYz7hcGwZ8kx0rN9m8kB+scCCZ4LDYnUQeNVLJlh1W5ZrGk5XQyhW3/sEo4LkFf0GUqfoEbHSJMiLLcxmyzHKwotXut0nygA9CndBHABB3gic7CXztJx/VXhJxccp8gkngBoAh1SHS+f037yb4ydSmJWFC0MVM7qh8H6yuyutXTN8PfoF04PH4O/wQE4AAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 17,
                            height: 17,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Electric - Electric Box',
                drawingInfo: {
                    labelingInfo: null,
                    renderer: {
                        description: '',
                        label: '',
                        symbol: {
                            angle: 0,
                            contentType: 'image/png',
                            height: 15,
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAr9JREFUSIm91ElsTVEYwPH/d1puoqTcRCwk7ESCBRURCyxMC0FiuO8VjRAWKkJSQ999aaJ5t68khkhtatgY3ruGBBExrFgIsdAFIqxILKTJpZGSq33ns2hVB+U901nd4Xznd777ffeU859H+XAvdtI6cgJjVoEsBaYKVCh0gDxVx15Px8k7gP4VsJHc8jLkBDDp27PvK+t8iWV7QP6JcXVzfZRs+yMwQ36PwKHe20ghFOQh2A9gxoOdD7IWmGkjeRAQrvHxbv4WGJCvpg+T84YvO+rZ+GFQzOlmwlQBPQ8sAL2cdXPzis20D2zk4jiwLQACp1J4W4cL2o/3tp784gr0jiALbSRngCqKqGkfWEZhC8g4hdejGLFj8MSsk1tkY1Pn4y0DyJLoaibcUEBfATMzTm5JOk7eLhpUZKX0XJ7Yzer4V4HQk2lA7hJIjcRmBVA8KDANAFfuERXDfRvmPmgN6PSD5CZYhxmDZ2gFHako+XgACFQCSGTbS+HAtoMgUNmNqRL0yBAwog1IDAY/AaONS2WJGY4FRaHTx7tJzE9/kf7gS2CWRmYO0AaQdcPZhYiJabxrYMpBvwzZPTq3t/Yvitne96ZxuCUxsxTdCrQC2E51DRwICJ/b2K4UxzylXztlOTvWgte7wi8bZgBYHtvWAqYOmJ0hvytN4pgfJ+5mnPxtiTUE87w7llT/YMvIFlAXePOOj1dLAvdT/Tog3whkBA43EZoU3tF0nNgH7OsfdJQrzme6WhRdD1BAa4+zbcjn/ikI4JNoCshNAalR9HATYbWiJ42rj2xEh7pmPJEu6KSrVmAygMLeBpI3isGGgID6JDcF5F8CDYpWAVU26mkLiQacXO8FqfXxcsViPwJ70UTQzIVz3Y7ZJjHLgCnAKKBD4Zmg1wqUnW5g3ftSsOFAoKemxPiAX+qivwX+q/EVp6QG4i0Ih+8AAAAASUVORK5CYII=',
                            type: 'esriPMS',
                            url: '4c36809f980c1681075ef602f7fbc5ec',
                            width: 21,
                            xoffset: 0,
                            yoffset: 0
                        },
                        type: 'simple'
                    },
                    transparency: 0
                }
            },
            {
                name: 'Electric - Switch',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '83b7d05afc87717137400f98b3f6d41b',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAyBJREFUSIm1lV1IU2EYx3/vdtpmU9NhRUPLBPuwJIlKI4KEzL6ToNaEbrqoILqIoGYTKtIGXQQV5EVFlNZmEWUfF33AoqhuIu1DhpRgUBqWq0jDk+68XZhr2zmuL3rgwMvz/P+/87znvLyPwn8MJVnRR31GBMtKgSwWkC3BDLJbIloUtGseKl//MfwQgTEDVvZpKlsEMgVARqsCAUQwHT1IoEkidnlxvfwteI0jMHsgzBVUcpJ1BQgJFSDLa2jcXI2rISnc5/AXaWGCQPovwLGRIpBna2m0enGdMoTv51yaFhaX/xA8HAJknc/R+LQq7HqsgytWkxeVXCNn1sY08pdMINVhY6B/kK7QR9qquxJlo7SwrAPmxsF9XEzV1Mg2I/DCC9NZsHYmJrMpLt/p/kB9eZDIKy02Pcdn9S+uUt13onANbQWQmghOXWaLgt919PDkxisKy3LJmTIeZ14WJQfyeeBui/NoKhuAn3CssgRV33XmtNHRjhXLkDR4/Bn5pU7UvgE6n/boTVYxf5g15Bjh2L0985FPni9kjEsjyzmG5duKkVLy/s0nntx4ScehD3qTysThpQIgwCz1MrSwpGFzkDJvEXmznIyyKAghGJeTydKt87A7bNx3hRJtSuLCoAVIWWTB7rTSfLWdWweacRZnMnNJLlPnDjVXWDqZ++jg3XFwCS1G8Pk7plCyegYAj5paCVa8oL2+m50vsjErJiMLxLAUADPa9QimY4CIU/k7mLN0GorFTMmqAia1j8eebouCQw+N7i3ZFAf3UPm6Fv9VEGtiZeFAL9eKHlK6qYiMsWk487IA6P/6jed32wlWtOo+SS8iEAcHGMS8W0ErB2yx6pCnk5CnE3u5jfQ8G98+DxK+1IdU9UdAIDw+XF918L2sb6shsF3ACYO90neznz76jUo/wDTswXU6Nhd3K1az4WQtfjuIw8CIfywxJNLfi9iUmNfd517cR2qtjc0g61Ap+AW3RyCrvLgNd2s4ibyq6x7cLqyhZ7WAdRKKBWQDZqAbZIvA1CQwna9iXe9Ib04yQ8u0arjC0PNXkXRA/2t8B9WvBAW+/0n3AAAAAElFTkSuQmCC',
                            contentType: 'image/png',
                            width: 17,
                            height: 17,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Electric - Manhole',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '68b548ca3835feae60dd19d9018f3f87',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABDBJREFUSIm9lmtMW2UYx//POadrDwdaWq6jsHGHhUtmGZsZRY2A6ByOucmWaOaSfXAucdkXoy4jOmM0mDnjZjRLNFtmQiSyaUYygxBZZcsMuCswQWAdY4XCpGzlWmjP6weBcXbaVYzx/+nkeZ/z/z3vm+e9CPifJCwtvYH7GCNho8DsR9g++Z+CDq2rzczbm3wgMsFQJBnFaK2o4WRZxq6Jfs+Ya8ru7B6t/mW3/ZNg4ICgqnW1ESUf5PyQlp9gDTWI/lK0ADLxNN7Pez69cuOl9sMF5dlvLwl09quWgryS1MboFUYdYwyD9hHcvDyAgQ4Xxp3T4DQcjCslxOdGIvWxOETFh2sizYa3eq/d2dR2+pal/KB1KijIVn1l7erSNJveJPEupxs/Hf0NNz+8qyrGARfa0Q/SXkX+sRQUVuQiOdecKYbpuhustxJLShK9AUGtDX+EpOTE/qw3SXzf707UvHQe3g5foNUAADAPQ8vOHthtw9h26AksT4ow+7y+JgCFAUHRCfpaY0yYNNw/im9faIavR34kZLHuHnejhtmw44sSmFOjrI7uoS3mtJhTKtC4azxSG6p71ueVUXfwVwUkbk84Xj5cpDJvPduJcy92PICdGEPzk9dRvDMPoSbpMwBq0JjbUykZJeps6cPQ126FIQkcZjyzqK08r4i7e9Ud3bq7F2vLMqCPCDV7vd4MQRC6FCCdqCkFgPb6Pr9Lw2QGxxGX3zFFnoeh58oALMXpGB+ZehXAfgVIDNPGyzJD78khvwZEBGOFpIjdb56EPMhUuXeu/wlLcTrAY818bAGk0WrE6QlPwAaQDCJer9moiB3fU4/BL++pckf7JgAAvMBHqkBEICarq5vX+L1JHDHWBRxfLHn272J5nhaqXgD5vPKUVlwW8o+cgig0VgcAIJ5zqkE+uVer0+TEvhYO5zH1cixFcVkmAIBOXNaiAmmW8XUAcrLLVvgFSQYRb05vUcTsbQOozb+oyk22xM1/NqlAHMd9A+CdrMJEsq2+gdmrD46qofr7OLmvUWU4NTyjhuyPQmyiCUxmt4mjCyoQEXXKsnxK0otbn/vcgjPWhVnD2+WDoyv4HhKyeDzzxhoQEUB4j8hPM8zB9jHGirILkozu7ydwbnOH2i2A+FQO276zwhSrB4BGACcURTwEcjDGNjPG6teXZ2sNFyT8uPcyZi4pTnyVYnbpUfbu44hOMALADQDbiUixV1T3ERHZGGOljLHTWeuTTElNy1lHs53aztxWNAmfyiFlRwyyS1cizZLAeIEjABcBbCKikYd9/d6wc7BcAJ+GhOm25m9YhfwNq+A96mOeyRniOGI6SQviiOZ+mQBQBaCKiGb9eQZ8MxCRA0AFYyyTMfYKET0laPgMwSAaAfgAOAFcA1APoJqIRgN5PRK0CNgJ4ECwvGBa4rvu3+svjwx7a6AYkboAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 19,
                            height: 19,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Electric - Primary Underground Conductor',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                76,
                                0,
                                115,
                                255
                            ],
                            width: 4
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Gas - Meter',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '04823d7470c78702ae039a63fe649279',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAQ1JREFUKJGdz79qwlAUx/Hvba65QxYbRHFTCsGpZIhboU+SB8g7FBx9AengC6SFQl+hg27FoUOHSicHF71Dh+ItxOughNJcaNrfdv584BzJPyMBbBgmtYXWrwI+5al4tErd/2aEMdeEYYbWz/LUexfGvNg4vhXd7pdTGfNh5/MH8f1UAKtUJLLsjDQ9Z7uFdvs4WK+h1YI09So/lvE8y34P4zFMJlAUMBrBdFo5QFY6AIMBLJew28Fw6FxxwySBxQKCAHq9P0AhIIpASlitakLfh34fOp1j3WzWgLOZT6NR3SoK7GbjO6GAJ5vnkOfu6415s0pd/oQxxtwIJylzJYy5IAjuSijA/YgrWgNwAAppTI8RtFJMAAAAAElFTkSuQmCC',
                            contentType: 'image/png',
                            width: 10,
                            height: 10,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Gas - Pipes',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                230,
                                0,
                                0,
                                255
                            ],
                            width: 3
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Sewer - Manhole',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '2ebc6109410ecf0a0ca585b9cb2afaf0',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAhRJREFUKJFtks1rE1EUR8/Mm85MJ7FJE6JJkSo12CotSBZGggWtNYgIiiBdirhx6UYQF+79F0QQN4IWBRdSrTSLVuLHwg8q2Ch0ITQJhqSxNnFmkpe4GKVNk7u7j3vgnd+9Gr3qLuJIIDRuUYvJFhtR1/n87DK1nWNaR/cEY9LktrS5LpsVC4OWcFGKJq3Uc+bKm1zLzbDWBaceEsLgvVQYGUyiWFFAoNIGex1R+8q5oMP35FNj+t1FJ7sdVgiwqPs5EE6BKsAuQfM3qDqYUTBT0LdCf3XFWRh9RDw3w5oGkJzjiqxzODwNSCguglvashEmhI/DwBg0Kph6jfs5SGsAusotawxF1aH8phMEkDaUX0PsLPgOQXmBU+cf4NMA3E32BSPQcqD2o2f+SBvsIlh7AQW16DcSnnMTTe2Dptsb/F8tF1AAHXTLiWn/nJxmHcPaA0ID2ewNa7u8TKQNQoRWPecB45ubdyasIQiMQ+VTN6hHwIxAPQ/CoLGUr3z0nH3c+LPKCysO/oPe8K8vWz/wDcNgAloS1pfB3M1jLiA1gOxR5+VUlvnSEunIJPhHwR8Htw6aDqrh+ZazIASVTIGrsO3CMinOTL0lU5znxMAI6EOgWeBueKur5qA/wE8rSII0TgcMtDPHOHl6OXapUS3cqX1gWNYRQqetB6n49hv3MgnnZkeAO4N5NVGYBWa7I3O6Xv4CTs+2GppuMKQAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 11,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Sewer - Clean Outs',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '8ac6b474de5ec4166d6739fca13d5ef5',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAeFJREFUKJGNkc9rE0EUxz9NthnSbmxYo61UlIAVpQcXKq5VRItWUVA8KOjJXuytFDx48B/wV7149C54UJCWCDFF9BQLFoIgokSCKSYmpSOxK2ZMk/QwMW5oUnwwzJvvvPfh/TDYzB4RAGCSP51CjE4fziz7lJ9XQF08ZWzhEp//G2AnuLH2m9sFm0AAiLzj/Uicm4tneLgp4OxjQvkIMQxGM6cwZFDrq+OIXUke2HEuDv7kQuwy7gaA80IcK1bVnLubvvReoOsfWAZBnsDY84mx719YcubEuYXzKtkEOPPiviqr6ewRuqXlKanWuH36pPfDju2E+5PqjZ1gJjXOLQNA+dSVwqHWZMuF6FtdScYBaWo9vxU4SHf/R65CA4ApnvUW1DTbdJBYhaGXwJp+R+Pw6zSokH5vKQK94gko3UKlou6ay0wxjI8uIAjUPZOuNzS0bi5RM3xqpjmDD0fJj8xTtEoMyDAoA9xBMLM6x92pNQDrB1SD5BZPstKyhXKIWesbkzLc6PUAiCHtqx7PbHK6ZVCta1Q17phfuc6wXqDsATyJzfKz1Cqmutds76+THiVjJ1ixSkRkH23NKoE/wHLqOLkNAABCxKKvuRb1twdQhfIAz71SCyB1mAlgokN6W1sHAqaVb58MjhIAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 12,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Sewer - Grease Seperator',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: 'bc590ed9ab1a59d8785952de3bd60560',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjRJREFUOI21089v0mAcx/E3D4W2dOPHGCEwBC7Gww4e9bCbx4Vw0JjMxMQY/wynFxf/Bo8mxpMXQogn/RPmj2UXjcmmAy9j4qpCKy0eWqAd7QQTv5e237Svz5Nvn0fiP5UU1Nw8ZkmY1IHI3wABw4bJC6oMz4Vd9CWw4e2bXTC6oBZBWpr2baAW53rzgC0v7oODULML+qEjKFk4eQ9qCtQySMuTT2/UZezGPrdYx/LBZ1EvqJVByTmD0cow+Aone6AmQa5AfBnsETdrGazmPrdZx5rAwuQJsDEBLdAqU3BSUVBKoBScgN4exJOQcAK2aivyxybGQ+8o8t3dKRjPgTjv1wUEqDnQLhprMzO2fsDqVWAE9J0fA0AMRCzYH9og5SGtgf4FNLcfuN1OP4CpQ3S84gikLoOkzr5rtN3slL8fCAOkL0E869wPjuD7u3A8qEJhbykl57oIPhf8L/jcsA9/C9G0c2/9BGV1TjhxIXxFSgmEBvZvt5EFKeF5DoKjAk4/QbICQg5feTzjfzZ78OsQoh7NB2euQL8N33adHaFVQCTCA8yee0oH7rHPT/f+BLbhlYhxTauCWoL+UXiA2QP9M9CfgggARlKE1z64VeTxZkdOCIz7QgJvwPEbUFdAzoHe9q/QBQFsG+41CzyfGUWraGzXOvIIjG2AswH6AWhrM6CDRrjbKvA0cMYAzaLxoN7BsOHRuDcO0KqBo7aAO60Cz7zNwO3WKLID7AQyc9ZCB2SR+gOm5rHKQo44VwAAAABJRU5ErkJggg==',
                            contentType: 'image/png',
                            width: 16,
                            height: 16,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Sewer - Gravity Mains',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                56,
                                168,
                                0,
                                255
                            ],
                            width: 4
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: [
                        {
                            labelPlacement: 'esriServerLinePlacementAboveAlong',
                            where: null,
                            labelExpression: '[DIAMETER] CONCAT "  " CONCAT [MATERIAL]',
                            useCodedValues: true,
                            symbol: {
                                type: 'esriTS',
                                color: [
                                    92,
                                    137,
                                    68,
                                    255
                                ],
                                backgroundColor: null,
                                borderLineColor: null,
                                borderLineSize: null,
                                verticalAlignment: 'bottom',
                                horizontalAlignment: 'center',
                                rightToLeft: false,
                                angle: 0,
                                xoffset: 0,
                                yoffset: 0,
                                kerning: true,
                                haloColor: [
                                    255,
                                    255,
                                    255,
                                    255
                                ],
                                haloSize: 1,
                                font: {
                                    family: 'Arial',
                                    size: 8,
                                    style: 'normal',
                                    weight: 'normal',
                                    decoration: 'none'
                                }
                            },
                            minScale: 0,
                            maxScale: 0
                        }
                    ]
                }
            },
            {
                name: 'Stormwater - Clean Outs',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: 'f0dee7ea216b5b17b653d3568d6d908b',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAcZJREFUKJGNkt9Lk2EUxz+ve/PZMIQ5GKkZTGmlE2zO7CoououugkCEQsobYZSIiUYgkYKgDIzCHwTtKvYHeOGVYFd2UXfvEAoxQjMWCs69dtTt7aL5vq457dx9n3POh+85z9E5PcqAXKmkXrLt0YQf//kElpVl9VsXicG1/wdE396jpm6MQHM9GlBpLOCbGuZNT+IUwKyLp55pAqEOfOfO2s8NzUG8/hn63t0ittEDQwfFgL7ZS8rtfS+Nba2Uq2JXVf5Kwje61eDHFjFfd/Iq+tUGVPXHo5u+umcSuFyNppVcC+UKuXL9KivJRZ7EXzLZNa0DbFZ471PfWF1QvCew/Bl0FwRbQc+b1TRoCNVg7jwA/gJULjcvu5l2PBUOwFgC41NelEFTm5Mz0yiyc3I4guhnJkitD3DhotsuyllOg5UtHCW1viPm6qSzxOE7aV7MGUDELgpdAyxw6RAMFwIyaYNYf8YBAGpfFkR+R1B5E24PRG4WL3J/DyXmouSlDRC3Z5xfPx5TGzjmD4/aXzNlw4wdSucOnt9OMTKfBMLH9dmxvZUk/vBnMQBQu+YH+f6lBU64hcz20lFZAJDRu71A74kO/ok/9giJ8xoiGvQAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 12,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Stormwater - Manhole',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '954568b5980191f0be68572edaa953ed',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjFJREFUKJFtk11IU2EYx39n5+yc7fiBbJhuWklzEOkqJQgMyj6whGIEBV40sPKiq74oiILCC4lgFN2GUDAoyIuwi0wxCQthEmmgEa1CKF2ZW87c5jvd1sVJdLr/3fPw/Hie9//nVcirB7Lt2JfaeGbJgUmeE6b0B7rvxtdOKTlVW5uGcN1k4fvFaCqrYy3OIIQEcgbf7R6mI+fo9U+uh1vO20iWD6NIW2holiirBFkxkc1CbEZm/N1RFhIhzXfjkAh0DK2GJcyOQYptLhqaQVYgEoa5KKg6lFfCnmb49N4qxoKvOHylml7/pAH7/KdZiG2jqQUyaRh8DlMTK8+xFsCB47C1HiK/LBT+eQg0Kf+Pv07NbglVg2BfLgiQjMPAM/CegZpd8OLJQbyXCwx4fnYzpU5ICQiN5Q8gGYefP6CiCkySSbPq9QacEgpmMyyK/OCyUgmQJNAsCL3QYcAFRYJkQmODE1QVUqn8cLEN0kuQjGMzqd8UAK2k9LOY/OqhfCPU7YVg/3rQWQV2B4QnwKovRh/bR4zNetFVQqMvqfZAtccYHhlcucBdC3X7jK2jb8BR9RRa0wqA8J/q5cKjPl53N9HoBfd2cNUYJpk1UDXDzKEeMKtR/r49a4S0rPutR7gUGKAn0Ih7J1S4wKpDMgG/p+BjEErKpqmw19PeKXJhyHLPt99xq/tkeHbmDsP9m5iPyWiWLPayqObe0Sk6TlxbbUPuxwDC7d4uoGttP1+I/wCR2rs4/zareAAAAABJRU5ErkJggg==',
                            contentType: 'image/png',
                            width: 11,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Stormwater - Inlets',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: 'ce2d3684186c0892aefd803aca84b10f',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAJRJREFUKJFjYWBgYGDwL/FhIBn8O8UCoRk2M8gq/WFgZP5PlL7XT1gYBEUTWOAC1t4sDCysxFl6eAsDw7+fTCyEVeIGNND84CYDw91LCL6QKAODoQORmr9/ZWB4/phMm4kENNAsKsnAYOyA4HNyk6BZRBKCybKZSIDQ/OcP8br+/0fTvGY6adbKykM1b+5hJE0nBAAAVpAc2SeVF/gAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 11,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Stormwater - Gravity Main',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                0,
                                169,
                                230,
                                255
                            ],
                            width: 2
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: [
                        {
                            labelPlacement: 'esriServerLinePlacementAboveAlong',
                            where: null,
                            labelExpression: '[DIAMETER]',
                            useCodedValues: true,
                            symbol: {
                                type: 'esriTS',
                                color: [
                                    0,
                                    132,
                                    168,
                                    255
                                ],
                                backgroundColor: null,
                                borderLineColor: null,
                                borderLineSize: null,
                                verticalAlignment: 'bottom',
                                horizontalAlignment: 'left',
                                rightToLeft: false,
                                angle: 0,
                                xoffset: 0,
                                yoffset: 0,
                                kerning: true,
                                haloColor: null,
                                haloSize: null,
                                font: {
                                    family: 'Arial',
                                    size: 8,
                                    style: 'normal',
                                    weight: 'normal',
                                    decoration: 'none'
                                }
                            },
                            minScale: 0,
                            maxScale: 0
                        }
                    ]
                }
            },
            {
                name: 'Telecom - Fiber Cable',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                230,
                                0,
                                169,
                                255
                            ],
                            width: 4
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Telecom - Copper Cable',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                168,
                                0,
                                132,
                                255
                            ],
                            width: 4
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Water - Service Connections',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '895256420711a7add5d544c66b3952ce',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAATdJREFUKJGdz0tLAmEUxvH/jK8jYg7mpdBFJIFURriwXdAmgvatAj+AHyEIahPtI4Lah0WBX6FFl40ERRgUtYlBug0YKk7pO22MMoeUns2Bw/lxzhH8MwIguGikewXmh1rkIFoTAKai5D02+92QpTATdMusCQUBgMqdJblMieJW1N/37ojq1beT2thh26kAHpVEdjaiZhaS/a9mlYGIH4DSY5lwSCezVHBR+/XjV1wCW8oG69tnbK7O0ZQ2Kxun7KzNd1wgOjrAaFzn9v6JutVgKhly/NcRpieinF+V8Hk1hmP+3qGiQCIeQgiVB6PcG9Q0QXwoyGBEByCge7vD44tnzS2uO4aaTYOXSkVzhpKjnDFOznBcgCXDNx6YbIeSlKWy7ExaUZm2JCM+m71vuBsL/Il+xGzVT19fWgikG3OqAAAAAElFTkSuQmCC',
                            contentType: 'image/png',
                            width: 10,
                            height: 10,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Water - System Valve',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: 'b9cadcfc4a5ad54cf4fd835c01edd01d',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAixJREFUKJGFkl9IU2EYxp/tfGtbZNtkfzjb2U64OYTZkrKLLGquVcQkiZKo2wzCwJuKboxuhIFBXhmll2ZBYga2wjlnTbB/jDYpaCKV5nYmQxdjc01PrAsX7LRlz937fu/ve9/n+16CiuqnaPqTbXWbhIZMnM5HqQjgWfu7igjDdqnFXXcrm+I6qxmbKL8Uk9OMIc8pYyKNtncsGuc6EOpJlsNNndVsleFd7W47a953iMhkcviHBtDUek4mlcmx9Dly9ueE/5jK2X04HOiaLYVFrIKdPuB0mZk6e5kJikjA1jdCodUrJh4/CMJxfRde3v5BAMDW2ntJw5islcBSKbV6NDqcCnVkdiAEtBEA4EFuWPcfJFuSRTFWO2ae+04BHkIAIJ1cYYhUjlw2I6z8xWM9l4VIJBakdbRGonPE6wkArK6tk1ejj8q6zH+JY2NsBJBIBHlugRPVWowMAQCjTpk/fv6inCLCyYuvje07dgryLwbvFxIbmTkCAFo9HU0lFhvUTM1/PecyaeSz2fyC9+omXKVSXXs/Nek7cYEViylqS3juTRCM2TI0j+I/j99pmXReGRkP+5+d3ONqAfWPC75+eItkcjkZfpi8DJRsWKDvjNvZMRrwDfY79h45CpXetHnA80hx3/Hx9TRQ4BNGc01DGO28AAZQCNw93ezummr7Fgn1BJ8+MSZiKWp5sa9gsrIratpwz+tx3SydpGwxvN3NwwCG/8QcAG6msv/fVHK5nPEAuaUAAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 11,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Water - Hydrants',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '46dba11ab6367c732f8f6fc1ceb04240',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAbxJREFUKJGNkk1rE1EUhp8pSSZOkiamCBkZTKANaRg7tEYsxI9QXWgWLtwVcaM71w4UcSEu3Mgo9Ad00Y24ExGslFJ1Y1yJKwuNtR2EmsZSTJqk3KZNXdgMTZ1IX7hwzuF9zjn3cj24SFVN/WdUSrZzubbXELY1e9jncYM3fNxG7N1r58KLDSSOBB9VLvD98LlrmQuxRJxgOEq9WqH8vXj8ffBBjC+PS/+B74bGn4y/0NLGaLvSB5zSR3rjQyPPp6e4ebDBX3jAXAHI5s5EtLQRdlvxRCI5djmbWZyvmRsAMq077clxAG0g5ZgbtSrLnwskjLMEIn0AqMlUiNmPIQDR7FE61vYqQSdeK35l5uUceUC/dBWAQCTa/cF2xZYTq4MGN261UFOnnVq9WvkXlps8BaiUS1e0QWMYScJ/TKE/k+0w/y6tLshN3gCIbc+SB0DYlgnga+UCq0sLhZP96SEkqQP8tVxc7GmIMWFba65rv3p2vZ5/9OH85qd3hd6Ypvv9Cttii/UfK3WfIl18PZkvd70zwMzD3KYcN98KL/qB8jrfrPJhb7fvubt/9iXtuJlcYWFbE8BEl8aO/gCv4YLErQ+r+gAAAABJRU5ErkJggg==',
                            contentType: 'image/png',
                            width: 11,
                            height: 11,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Water - Manhole',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriPMS',
                            url: '587f84fbb1efc5dea27f3e61c7fe45c9',
                            imageData: 'iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABAlJREFUOI211V1sk1UYwPH/efvF+rGytV1btm6sWzv20Tm+xmJkGnDEKAsYEi+80QsCXhhMkBkJCYleQMIUQ+KlBr1WA7oZowsXEgloptNtbAyc28q6rqXDje7t+rH2eMEsVHBBEp/kvXifPO/vJM855320/E+hfZSiI19Kf06hDjAhmAeGT+8W048FH+2TxkyKQ+Q4mEwl1yfVBDKXQ6vTYbSY6eqRg1Jw5j0Dn9Ahco8Ed30lt6ZU+dnMzWBVcGIaa7EJi7UYRaMhk0rx58gYCNFcW1f78ZHSktfE1/Kl7hfE5KrwW73yaTWx9M3gTwNFldUe2p55EkWIgppqIJ1OM3FtjHAotNXX2Hi5q1e2d+8WNx4KHz0v3fFE8tzA5f6ijW2bKTIa/61T6PV66poDxMKzXO0fcAVaN/Yc7ZObTnaIxANwRiNPDf/ya0lL66ZV0fvD7naRTKUIjk/WVdasfxs4XgAf7pUVsUj0ZZvDRnxhHjV+B4fbnQfGr46ynF3GF2jKt0ZdXGQ2GKKmwc+P31+mvMpz6JU+eeLTDpHMwwq8GJoIKvUtzcQiswwNjfHsCpxOpTh3aYjaUhPOinLWlpYCEL05w2I8Dggqqz3EIhGrQ1veAfTkYSHllmQ6g96gx+50MvrdFdrTGfR6HXO3btFS6aDas45IaCYPT07N0PSEHwCr3cbUjXFc5es2F8AS4dQoyt2NMRho8pSxMBfD4XYTDUWo8VZgL3Ny4cIP1AUaSaeXGZ6d46mdZQCsMaxhSV1CCpyFmyfJgMy/rq8uJxa+hcPl4vof0zzfuROT2QxAfP4OySWVVq8bnU678rkERUCOTCEs5GQ2ew92ul1c6LtEhbcSs7koj9b7KomFIyRUFU9VRb4+qapYzWYQdy/KvR4LcbHYbHo9sahiNJswWiwgJcHxKfw1VfcWLHczMjhC9Hac5wIN+XxsNkqp044iuFgAG5fprfBWLUyM3bA2bm4BwO/z8F3/KK/u25UHiktKCUXmsZdYWGMwAJDNZglOh9le6x05tVv0F8Dv7BVLR3rku4pW8/5cNIKtzImnxsu+tcVYrMV5WFEEO3a0odPr8rlrA4M0NdcjhHLs71zBzfOHOZMNNOz57crP7TIrsbtdGE2V/DNsZQ4AcrkcowNDWG0llNhtZ7s7xfmHwgcOiGzXebmnZduWb8dHx1rD0zN4N/gwWSwFcC6X43YkyvVrv+Nv8OFwOj/Xqhy8v+aBv1v3XjG//wvZ7mvacEJdTLwxMzmlWVi4gyLunvHcysFxucvYtr1N1Wi1x7s7+QCEXBUG+GifSAFvHu6RH/oD9fuzUuxSWJkgMC9gGOjVSs6e7BSxhxmrjqbTnWICOLby/Kd4pJn3OPEXBRV9L5RA298AAAAASUVORK5CYII=',
                            contentType: 'image/png',
                            width: 16,
                            height: 16,
                            angle: 0,
                            xoffset: 0,
                            yoffset: 0
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: null
                }
            },
            {
                name: 'Water - Mains',
                drawingInfo: {
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'esriSLS',
                            style: 'esriSLSSolid',
                            color: [
                                0,
                                112,
                                255,
                                255
                            ],
                            width: 2
                        },
                        label: '',
                        description: ''
                    },
                    transparency: 0,
                    labelingInfo: [
                        {
                            labelPlacement: 'esriServerLinePlacementAboveAlong',
                            where: null,
                            labelExpression: '[DIAMETER]',
                            useCodedValues: true,
                            symbol: {
                                type: 'esriTS',
                                color: [
                                    0,
                                    92,
                                    230,
                                    255
                                ],
                                backgroundColor: null,
                                borderLineColor: null,
                                borderLineSize: null,
                                verticalAlignment: 'bottom',
                                horizontalAlignment: 'left',
                                rightToLeft: false,
                                angle: 0,
                                xoffset: 0,
                                yoffset: 0,
                                kerning: true,
                                haloColor: null,
                                haloSize: null,
                                font: {
                                    family: 'Arial',
                                    size: 8,
                                    style: 'normal',
                                    weight: 'normal',
                                    decoration: 'none'
                                }
                            },
                            minScale: 0,
                            maxScale: 0
                        }
                    ]
                }
            }
        ]
    };
});
