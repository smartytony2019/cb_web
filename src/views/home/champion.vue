<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希PK拾
-->
<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page">

        <div class="headerFIVE">

          <div class="head flex-between-center">
            <div class="flex-center-center" @click="$router.go(-1)">
              <i class="iconfont icon-fanhui2" />
              <span>哈希PK拾 体验房</span>
            </div>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
            </div>
            <div class="rightUp" style="display:none;">
              <div class="rightBox">
                <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                <p class="van-hairline--bottom"> 走势图</p>
              </div>
              <div class="rightBox">
                <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                <p class="van-hairline--bottom"> 走势图</p>
              </div>
              <div class="rightBox">
                <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                <p class="van-hairline--bottom"> 走势图</p>
              </div>
            </div>
          </div>

          <div class="en_name">Block Hash</div>

          <div class="orderList">
            <div class="list-title flex">
              <div>Block Hash </div>
              <div>投注金额</div>
              <div>中奖金额</div>
              <div>下注时间</div>
            </div>
            <div class="maquee">
              <ul style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
              </ul>

              <ul style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="view">
          <div class="gameContent">
            <div class="game_name_list">
              <div class="name_list_item active"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
            </div>
            <div class="content">
              <div>
                <div class="orderShow Hash_group">
                  <div>
                    <span>等待开奖中...</span>
                  </div>
                </div>
              </div>

              <div class="flex-between-center new_win">
                <div>赔率：9.8</div>
                <div>
                  游戏说明
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgBxVndcdtGEN4FoLxYmjAVhK7AdAWmKohcgVyBCYaUZ/Ik8CkzEmlBbkBSBVYHhisQXYGpCsKZMC8OgfXu4XAASJA8QPT4exAB427xYXdv/4zQEP7wsgsJdMjFVwDYAYIWALXSpzgHpBlfzJDoC/9G4fgsggbAOot9P2gl3lGPN/k5GUsQzvhvhPG3URj+NbPdZkVQiJF3dM5v8aul8MuJNUYw01Lb/Fc+oAPVZG9tie4k+HYw7iFiUNYYztl0d2zGe1j+Nw3DYL5pv3IFwjcE7ApI7QJJNn88Ct+/u4WmBHvDyVVJa5ZCN5L98+INoXteIgoYXo8HfahDMDXp4Ue+7OYLacTaCrdpy5ro8DJgjZ4XWEzxmXscBv012U6VgMQ9jAw50RomL/kUBvsgJxBZIlMfHH4HR4NF/LFq7ZoGS2YVcvG3413OLH6WgPOK/bKthCI9wnJ5u3Of/3eb3F8+5SZfN3eJoPIRx7mxJVflCiVYnNZVkuxKfdZwuEZwbaGY9fLd1FbwRsiHHjkvq/zLyGILsE9+0rdzPHSfZ+uNDybuQVD4itE2cqvrU0j2gHu+iNS1+Wdq07/J1TZZkmXUIUzRokViDpDSoNKGd/AV9BdfTwbPtwn0/YsOec5Ddk8EX5x40c0OkZYnpjeBerdFrlrkJg9GSYfub6JFx2jDfHA8gl3w8KRwN3fi/0+KJ1x8DpfusTwzqwi720SGYX9eevdiqQ6qIogS5VMhM5sgnCQFzQB9rjoE8kL+MRojwhewA/rd6qPYJ3vy66UOanwpAgt8eH92Aj8ISHBHCEKuJdxEg13zEJM72BPED8uyVdllw/C+cNdxiuZqWrOtk+P4KCGoiOXy3mrz0isepK6DDv6ub6awJ9DB0U0xBKmwZVkDKt/FNAVydHghJm7rZ3vJsypVEuU+KgePcy/UAalqXPyiJQTTOi8rNp8ASZVr5RmnS6gJzumP+rLlwB6har38xqrQqEJCYIpjIZiaFo2pG8EfjE9KfieFbQNyaq+Dv+pLziSo8ybtSPq70TVXlgF/CzINzhyKkzQ+Ibb94Kpep1ZC3rNwPLWLeRWQnAw6h/Ppf/TYxhEB/KGeLpbyIIImIIpUHkivP0NTeMLBVIFTj70wj3+kioAIGkCb9BaeiIQ7QMzL6MjR2SNN0Ain8JNRKlyYm65m6Fo/b6Wx7OdAvRvLhUsaB5ee6QEkljU5LNzgn3IW+ac3mHyVa2iAYhyVXsYQTItFSLUoX6CLxTpg0wTqJPN+9qGw7v63w0ne0HOzlcXQPJPEbgB5sXiuRha1GBZGI4S18rp/dtFhNwv03lmmvRJBpcXENC4cKZwbXdPZ8UuSftqI49yqbcjISf+SuKZpX81Aa407p6xQV7RPyqfW5IqtLrtZOBmW3KtyNtMbjqXY7BqSTvx6Vxtam5y0GmyljJx0hh8mw87quspqhjuy15AVsNLXkvOgnHgfxLjaFlmqUS+EFGlbq9ZvHb+VzC34AeO3KrNaE9wk1IxzpcnaMsAUbYH3rMPp64SHoKdrQ1BIRsU5TCOC6Yv4NHNzvzEV8nyPY5OMPuY8WJ+r2pKro00lnIq58cJqnFdziK6Jro5zraA0dl13CFqLYBE6kHcJeWJAUo1ju/zfEBL0aYoxl15cMTVtab8DN1+gbklGWtAAAAAASUVORK5CYII=">
                </div>
              </div>

              <div class="select_content">
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>0</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>1</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>2</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>3</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>4</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>5</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>6</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>7</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>8</div>
                  </div>
                </div>
                <div class="select_item">
                  <div class="item flex-center-center">
                    <div>9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="flex-between-center">
            <div class="clear">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7ZaxCoJQFIbPsUtGiw/Q3ls0NvYK1R45RVYPICi0GC1NvkNbj1DP0Z5LKKgnNQQF7QaJNJx/O/dc/o+fs/wIEk235hDDzgQVVKv2BOBhqFzd/eom81JkHzAW4zpQtgfQQNBo6TiqzEvIPmRmiVxrbVbtZ4a9QCAtuD97yRh88pIma1I4N+wdtKAuxMd2kxWHPGXdfb7V+46gpWlO1sbL31tNxjCGMYxhDGMYw/4ZVuqNFFOQFtKmGpc66PvFuZSMRHQGpAf8LPQjostB10ul9QWCDjaFep4AmAAAAABJRU5ErkJggg==">
            </div>
            <div class="radiusBlock flex">
              <div>
                <img src="https://designer-trip.com/image/game/5.png">
              </div>
              <div>
                <img src="https://designer-trip.com/image/game/20.png">
              </div>
              <div>
                <img src="https://designer-trip.com/image/game/50.png">
              </div>
              <div>
                <img src="https://designer-trip.com/image/game/100.png">
              </div>
            </div>
            <div>
              <input type="number" placeholder="输入金额" class="amount">
            </div>
          </div>
          <div class="flex-between-center m">
            <div class="lottery">
              <p>投注</p>
              <p>记录</p>
            </div>
            <button class="button">
              <div class="flex-column-center">
                <div>立即投注</div>
                <div>USDT：0.00</div>
              </div>
            </button>
            <div class="hao lottery">
              <p>同步</p>
              <p>余额</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      switchLanguage: false
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: #fff;
  flex-direction: column;
}

.index-page {
    height: calc(100% - 3.4375rem);
}

.headerFIVE {
  padding: 0 0.625rem;
  background: url(../../assets/images/hash_zuhe_head.png) no-repeat;
  background-size: 100% 100%;

  .head {
    height: 2.5rem;
    width: 100%;
    font-size: 1.0625rem;
    padding: 0 0.3125rem;
    i {
      font-size: 1.25rem;
      margin-right: 0.3125rem;
    }
    img {
      width: 1rem;
      height: 0.8125rem;
    }
    .rightUp {
      width: 8.5rem;
      position: absolute;
      box-shadow: 0 0.125rem 0.8125rem rgb(0 0 0 / 18%);
      border-radius: 0.625rem;
      z-index: 9999;
      right: 1.25rem;
      top: 2.5rem;
      background-color: #fff;
      .rightBox {
        display: flex;
        align-items: center;
        color: #36373b;
        height: 3.125rem;
        justify-content: center;
        position: relative;
      }
    }
  }
  .en_name {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .orderList {
    width: 100%;
    background: rgba(0,0,0,.4);
    height: 8.125rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 0.625rem;
    padding: 0.3125rem 0.625rem;
    border-radius: 0.625rem;
    background: rgba(0,0,0,.5);
    background-size: 100% 100%;
    .list-title {
      padding: 0.4375rem 0;
      >div {
        flex: 1 1;
        text-align: center;
        font-size: .8125rem;
      }
    }

    .maquee {
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul {
        width: 100%;
        padding: 0 0.625rem;
        li {
          display: flex;
          border-bottom: 0.0625rem solid hsla(0,0%,100%,.12);
          padding: 0.25rem 0;
          >div{
              flex: 1 1;
              text-align: center;
              font-size: .8125rem;
            span {
              color: #e5cf00;
            }
          }
        }
      }
    }
  }

}

.Hash_group {
    background-image: url(https://designer-trip.com/image/game/group.hash.png);
}

.view {
  padding-bottom: 8.125rem;
  display: flex;
  flex-direction: column;
  background: rgb(235, 236, 241);
  .game_name_list {
    display: flex;
    justify-content: space-around;
    padding: 0.625rem 0.625rem;
    background: #fff;

    .name_list_item{
      height: 2.125rem;
      font-weight: 700;
      background: rgba(230,234,244,.68);
      border-radius: 0.5625rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #646566;
      font-size: 1rem;
      margin-left: 0.625rem;
      &.active {
        background: linear-gradient(180deg,#6f9fff,#2064ea);
        color: #fff;
        font-weight: 700;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .gameContent {
    .content {
      padding: 0 0.9375rem;
    }
    .new_win {
      font-size: 1rem;
      padding-top: 0.625rem;
      color: #6f748c;
      img {
        width: 0.8125rem;
        margin-left: 0.3125rem;
      }
    }
    .select_content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.625rem;
      .select_item {
        width: 20%;
        padding: 0.625rem 0.3125rem;
        .item {
          width: 100%;
          height: 3.125rem;
          box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 5%);
          color: #60768a;
          background: #fff;
          border-radius: 0.4375rem;
          font-size: 1.25rem;
        }
      }
    }
  }

  .orderShow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem auto 0.625rem;
    background-size: cover;
    border-radius: 0.5625rem;
    padding: 0.5rem 1.625rem;
    font-size: 1.125rem;
    height: 2.5rem;
    text-align: center;
    box-shadow: 0 0.375rem 0.3125rem -0.3125rem #2e2e2e;
    >div {
      text-align: center;
      width: 100%;
    }
  }
}

.page {
  color: #fff;
}

.footer {
  background: #fff;
  border-top-left-radius: 1.0625rem;
  border-top-right-radius: 1.0625rem;
  color: #60768a;
  padding: 1.125rem 0.625rem;
  font-size: .9375rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  z-index: 999;
  left: 0;
  right: 0;
  max-width: 40rem;
  margin: 0 auto;
  .clear {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(119,125,149,.47843137254901963);
    img {
      margin-top: -0.125rem;
      width: 1.0625rem;
      height: 1.125rem;
    }
  }

  .radiusBlock {
    height: 2.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.125rem 0 0;
    >div {
      flex: 1 1;
      margin: 0 0.3125rem;
      width: 3rem;
      height: 3rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  .amount {
    width: 95%;
    height: 2rem;
    background: #eef1f8;
    border: none;
    box-sizing: border-box;
    box-shadow: inset 0 0.125rem 0.25rem #fff;
    border-radius: 0.5625rem;
    color: #4080ff;
    padding-left: 0.3125rem;
  }
  .m {
    margin-top: 0.9375rem;
  }
  .lottery {
    background: #eef1f8;
    border-radius: 0.5rem;
    padding: 0.625rem;
    text-align: center;
  }
  .button {
    background: #eef1f8;
    border-radius: 0.625rem;
    text-align: center;
    background: linear-gradient(180deg,#88b8ff,#4080ff);
    box-shadow: 0 0.375rem 0.625rem rgb(0 0 0 / 12%);
    max-width: 16.125rem;
    flex: 1 1;
    height: 3rem;
    border: none;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    margin: 0 0.3125rem;
    >div {
      >div {
        &:last-child {
          font-size: .8125rem;
          margin-top: 0.3125rem;
        }
      }
    }
  }
  .hao {
    background: linear-gradient(180deg,#4de0f4,#40baff);
    color: #fff;
    border-radius: 0.5rem;
    font-size: .8125rem;
    text-align: center;
    >p {
      margin-top: 0.125rem;
    }
  }
}

</style>
