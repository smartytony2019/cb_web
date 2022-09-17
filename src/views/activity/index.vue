<template>

  <div class="wrapper activity">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" />
          <div class="flex-center-center title">优惠活动</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <van-tabs swipeable @click="handleTabChange">
            <van-tab v-for="(item,index) in cate" :key="index">
              <template #title>
                <span class="van-tab__text">{{ item.name }}</span>
              </template>

              <div class="content">
                <div v-for="(cItem, cIndex) in list" :key="cIndex" class="listItem">
                  <div class="list_icon">
                    <div class="van-image" style="width: 100%; height: 100%;">
                      <img src="data:image/png;base64,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" class="van-image__img">
                      <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAZRklEQVR42uRYaXNUx9Wen8BP4CfgeGG3BxAgsUnGdgCzEy+sZrHfpOp93wSSqmzlSpyqVMqJ48R2qlLxigwCtGENixaDhAaB2LGxY8c2IM1o1jvrOXnOuben585N+BADYemqp87Sy+1znj7dI4Xup8aXtgnCfOnFCMCKyy8SX9qhOlV8O+AT2DEAdIOafjuXKv12bRJpbfVtC93PjT/dIZjAF7dH+OIONiBAyPD7rCSff7vnM/O2E9k1SGwzjtXnXwP9ZgzkS+HQ/dj43DbB+PKFbW/ShW3MF7YzJCBJg25sIwHWxG8j1SHVhm5RY9t5CgJ0nsK/PqsOf3TbuND91BCwYBxfeGEnEhBnTcZWEtB5L4nntwIq/bomDVLGmmSrXumjyhxds2o9bxy7ft/6sI0+GLpfmo+I8y/EACRgC6k0OKfS+MizmaGXVQeM7tl2neBaZpy/T3USyTXfKp19oTl0vzQEv5XObonTuS1cPruFRVpspiofCNhMxq9S52wWaUCVeSotdB3bB9v4bvxNAPame/9B59PrwyDiCoJlOruJCIktn9kkCTa2SvSLT0EG4jPzzmGM+uwaKpUoz2dhxynMOmausc049VPx9OZ790EXIkrDGyLlMxtZMQzU6CSJ0cRuJDqzkeDzjdE+6Has6pU51XbQD92/prWDIEHoXmxFqQghYngD14LObCCjl4x9Bvrp9XZcAGbOep0T7A9+w0qdRwKry/dE31g779560J3o+vF0+vnmMpJLw8+TyLJIowMlxfPqN3b5BihZqG3m2bWtXjJS1q98w46vtX1+xfo/h+6FJr+cyqeeewWg0qnnGECgz5Haqlvp6kgWID7oPr+dD137/Gsa20r/GNvnkuJbM7AXwNplHt6wOnQ3NyECgewsDT0bBxDws+TKZ1RWYPuQGMCVZPyAf4yBrmP7zFyDoO3TgeAaVga+QYXosxNCd2NTIobW7SydfCYOsA9DAqN/j0Qau1gzthj0eWQCdi0qA5V+XfN7ps/33bK1ff12vt2TroP+ol0rFrobGwJajYRcKUURyMl1VIquY9URWBm2SINi1KcDMlZBxcG1Rhe/ojCoa7l+L/GAJ9dZ6X3X6GZtO9azPb/uw37flcF9doXuplaMrgkXo2sjbiLXkkB0Afxs/evI2NZnbODEGi4MrCaA84pV8K2iAqT4Cuh3x7qyNCgJNOTJt9QWnYzffKfit3tRKQjuaZ3PRny/Dt0NTYhAciIAK064soRAVFqfgHy6sU8IAUh6/0rKH1/B+WPLOR/dypQ8y4XLr3Lu42XA01z68gOWfiEn37/KrguUdC0rAetXPQjjD4wP6nif1jaG7uTmRNeMLw6ujiCZXI0Skuvqq0Qieb5+EsCnSS0OrBQS3CQff5pyfUh8P66Hrw6waYW/v8v5S79jcq6pXfzsL0IO5ixnzBUizbpsscrYZHUAY+0+jd+VPtg+e2Cia+7MB52ja8YVBla+IclEUJpQ2Bqs2OKH7gVvdU0cxpYGvDlKwnLKf7yM8oNbuHTtEDvRlzjbt4qpmGbTil8fVNs6Upw7vk6qhkCKrmO/v5Kg2+/6AB/8Zp86TmD3aaXtN/HceQ+6EFE8sWInNhgvDqxAUlcgwa400ADR5/ZDF9ixhgRcSTjhfUtx7eCe/uK9SsJL8VOc6lrIRcgbtcLn77DT+10hRdbCmoG9KIpBXfbk36/dK+DqVbEZ/53zoHO0aVyxH0QcXx6TZAqKklij9y8nA7H/LTRxT6Milmoyne4nOTf0Q65t2ZM/5sLVnoqd/6KNk4eWUyl5WUwlL3/5dc52P8G53iWMCtNKA3R97DXwbd1bf2DvwXGYb8ZVxwPSd4XuhOb0LV2TP7bsSvH4MpKEBnDclUWRGANZGefpwDIlQZDziMhf+C07A9s5rdUw9K+rYCTKid4XOH3y51zOfu2S82U7p46u5nRkIWePPM5OD0jtW8L4hn9PZr8irW37rU6Af77R7Vgq9T/9333Qi31Lw4VjS6IFJLEg14LIY0vJSBfWbyBjxQ9poAkDEZTreYrzp37EpbFhllZ2vkFyV3F6cFeAiGTPFh7ZM53zXx/x9eUuvUWJ9jmc+mg+CGkCuU/o2tinVgqk3ZPZt9kTdGMbFOUQaVy2D1LHi9+LhXAwx4dub7NEYOORPJLoBrCEXd21jR82CWy/9Ak8GzA6iNDEOb0rmEBCdStnvxFUE0GjICK2v56zl9/h2kaFJCcPrwQhDZQ5tIgdVIkS3fddsvvQ/apt917THxxDHmyfzcGnodvdnMjS8YW+pyIIjPO9FrB9ekED9+kK1XufosrYHgB2DleKc3QxZw83cfbQQsp8vJmL33T7Scl8jSr5KSpiGsdbGyh7/k+aeCXp2iCX01+xaebaSnbM5UzXAhDSRDmQje8E9mz26pdPkZKj/Us40A+/6TNr4J1qDt2uxpGmcfneJ99E8liB0wabVFdY2+rYKALDWE2EAknJQ+a7n4DfBXweGY2ciSzg3JlfaYWUEt7jXEhx5tzrPPrhFIrvn0uZc1VEXB/kRPdGGmmeQulTvyH2NeL0EVTJIVRe3zOEKiF8R75PhV53TzYWF/CTL5YbwT8GhDy57bYQgQB2ImlxN5kuCl4y0ceA9Vtb+zBHk59DInJHJSFNkhjOD/0/7vTlDF1Pr0vGQqbUJ1zdsiAi1r5YCSlnvqohYhOPNE/m0X1z0P9H6fNVU+bkzyh76pdMuOrwN4qun8O3dC/dgDkcAhObHhzjt9Loxs4Jui1gI7Ynw7eYiMU7892LY7J5SCQY0EAA4+t+nFTXvifUB5ighQTOeQnP4i7PRf+Xy/HTLK34xR65njiLRGW65nP6o3mcv/B78j3On+8zibZvw8c/cInQqnil6to6wemhVzh79nWOdyzm0tglX7Vke9eSfMvBXrAnxt41HsDEoNJA+zQmE4v1+30KkpzdEjIK3U2rkcgrANciLzIIDQ595BIASCUoCY3s4E2QhOeGfsK1LduzhjMgIn2wgdOd9Zxsr5Ofrj4Calu8vYmSfd/XiqlumbOv8fUPHsEbMwsP/duBeaXYSZDegD0tABZJZWKvvtgQh4JqY7OyenyTtbsfH7wFD3ZTGImM6IcEuuFG6I3k9ykkAJVOlQ8kAIvIQcDZyAJ9ULNIuHPi+3p11LbCP9o51TGH0p1zKNk+mxOtSObQL7zq2M+je+u4GL8o5g1Isv7MmddMf2CeVsnA/xDI173pPrFfE5eRtcgH/UCjwI450vTnm0vE4cZI7vAihuSAPOLqeZAjugMd0vgJEJ9WggSqQEXIyc+d+AFO5hBLo2KK818c4NqWObadk22zKNU+ixKtMzmxP8xjbQ0U+3AKrqZJPHZkQ2BO7rMWjh1opFpyzNU1dng9qmUiF6+f8PUVr3ajEufq3pSUQxILYgA0LsDG6/kgXV+j+kQaH/oFJLfKTXknkMQ3cocXEiRXQ3wKz867Y0ziXURUegTMMyQADVIRPiJyF9/EdTSP4i3TkaRBf5LkL+0DMygJMlKtMylxAITse4xje6dx7MPJNNo8kQpVic1fHeB451K69u6DnPsyUlMlCR75MMzX338IeJgTRzeQ79oaHeRUex2uyHrZMznYu4lVybDxV/zB3CyqtQmHevy3rIoFYTxw8dyhBbopBe5W2NAtYPv7KuNt8rPyx9fBegFnj67yV8SltzjVuRCn/jElI7ZnKiePbuTalu7byiCCUq0gBoDOiX2PcnzvVB7FA55AlcjJT/S8yLHOpZw6votK+ndHsGUv/hVkPMgjHzzMsdYmtlVEnBn4P061zZIq0X0jDl+MgImbjG5sSCWsNmfZyPxv934UIvNXOzjNTmSeQDfl4IQb6CbhF+g4tSHVBkAEgnFLH3d/bvhlLicvcxHvgWn5K+/jFC6U5LJJrkvIFI41TwpeJSODQpqORaUotFJknsxpqcOj/QdJrgJNZfrky5QafJn9jXCdLeL4wRVmrFZlqmcLJ3EwUm0zOd0xBzHUs8RjYhbYfFifte3YnDcOeMOJ1P/n1ZGOzJvgdDUwQAolATakIAsdwAelz/pdXasBqAcZCKj/Jf3lUtX0jUh2LZHkAkjugRkspx42kjudx/ZOxdswCVWyPlglvVvcOa3uHDMvjqvLJNa+E/18vflRvvr2BL729gNcSv8j0D+KX1zpgZ9oRcZRmYmW6ZREFabbZlK6YzZncKBsHmy8xpZYba6s7o3pklyGvm1DMq84SKhB1pWUNbq1IedSta04OJdQFZzGPZy//FbN/Z3iRGs9j7VMk5OtpCABSG6YIJHcR0GIvgsc2/0wFa8N+OaXEhcZY3ROGmQImUkhtmUa5T55O/hWgJBr7zygGOveEaiSJK45VKNUGIFUVKnuB3ufRRkhBFWi1+xHNYDP5qbBq6R68mTE6ay/OX8Apjvq1yDJ7BycQ1nA+UjkXL4RHKN3ulAy2uo4JQ9wx3x9J6qbc/51HsMVgyRyskIIAEKSSDb8WiGjuN8Th58jrmmZ6E8NKS6ksjBn7MBsqq2SzPDv+fp73+GR975D1/HAF2oIzpz+jdkL4cokrKX7zoAQHCiNBbhx/DiUnvzUicxZHbqZDSREnYOzKSubUMx2JXxGDwJ+kCe6e6rqUPKzNFlIlBAQrJKOx5GEqYQrAkTgzsZYgMxpT3Qu5vznLczBpn/sJdrqQYQmUBKp5MZBYvbsa4Eqie0J8+j7D4Hgh0Dw+srP3tTRDZgzmce0MqbLWqi6sO4dhGgsWUOIB5sbX35iGLOLm8M3/6/wbGcdZTvq2MiM6IrZVnYqpA8wfVai3OU6YT3te6fKlVD7FzOSvQ/XxGQhhZNIKMYKMZg7j3IX7D8Gc5/t5XjHErX9VfYnTuqpno419N1RQuItM4NjQZJU2+juR1Qmu1ZgTxN5TMnA90GGHAqQAczQ6gDc2NpNLmabnGjsDnRA/K/cCiIsIdiIDx0qsUkjgeAYshLByC8UPe3TKbF3CsWa8XD27+Lalmhv4jGQkkSlJNsaOH/hDa0eNP2FlTzyPI/IT9N3J1Bm+NVglR2YLYTrfEhNcBzfMlUCYkQHSbPED0x0idgziRJ7JuscVJY9DCADe8f+NUaNB9LT69RW6dpdTmvY/nK6dYTMwCZmsso2kTNFYqMzyPgU2qfSwoxHYGkEiJPHEnhMTub7D5L8qqlueLBxVcwiudLMqS6NDHK6exOPoarkUcc8Hn3vARrZPS148s/9UQlN4A0A8SBkkiRdq8S59Dcea1tE8d0Pwz+R0Ocbq0SCjNT+6bpXVIcCcXJW47Dw5aNtRiTVWhcO3a6WbQuTIONtzkhsBDKstoX41E/eGDJ9KZw6BCzBI0lKCCciz3BN0ySbikj3bCScXgYISWQhMr77IRrFo3z9nQl4gF8NzB3D6UeyNdFIuJv45olkKkLISLj9WkmpfQIQgcMCMnSfAEjRfZOJSfOg0ByI/YnTMeOx0O1u+LicGGziMVKpdlhtgC1ge+NcuGPMvLQEKtdByxRKICkxPKi4erh4tT+Q1HT/Tkk88AgnJKGASpAiJzz2wYMg5Z/tXVtvHdUVPlH70paWNJALJECuOI7vVwIuEU+8tn+h/IHmoc8lFVCVihbRQG5OcbGT2K5jHwu1RTzgPLRSpUIvkLa8ICNe2rQ+czkz5yRqVa/Nt76Z7X3mnCMeiLHHySzp07fXWnvP7L2+2Xs8kewMmMrCWJtdcoEC8OnHkRW9+TiPI46nEMcRewIY43ysGDUrBID5Em4dKRC7+dZTy7fefmrzfm2g/tsTpg2k1uiz4M5Pck9KYz/kuXgUQ1AUQWEhyIAJ33nGNBl3jjc3ZIL5ERQ3ESXCGAipvgTzw4kgs30m/tOLLYJGb39b70ExWHzsBjAR44GIuTMSMWp2ZwB1vOPSdUhd+a0T6ts1+fCfDfjC3kSr/+ZbUsNkLeqWEWfRbTvNsT8WSnZjNKZggbRYfNKvDrKo/7vxbssXsz83oIU31fKIrAlSpiBG4x7Gegu4z/UzrTvsD9/XXYIx3CGpEGNWDDAFcevhDuEapEafcbs+D2tRIfLxy/xa3FaMNbXpO6YgY9IQl7oyCqFFiSBICEECLSoECd/5rmm2+PcnNU9RQhxdkZ79ECMsj8AflvpfX3Lvm+BD8k189AWLJwyFXBzlfWKIUcM9a4kg6Rw4Z7FzRaxlfRDBx5F2KjdCWMNiuCDi12RjEZOzoAhujHFAnLHHJebTjiddf2LCe6Qy3WNuLZezH3v4dyYfOfShANWFEdHdgqef3zC2T3TtGanM9Ii/MCYqboCdFUIQvb7eJ8YOIdLjCkDbzpU+uc61EdgVT+RnR7QIgsXUUUTlOEVNfTIWTAYa844JioA+zOMYwdMOjKJwQ3o0GW+mB1/PT5vWfxL5CfL9EmIn1fAN8v+V99yx9McfQLA+7rDKTC+4NxEQfRsEUUh2zhDAzTEDCDMRlI/vL+XZsCBMHgsjPybKFojTd7nHTK3BJ7L9GYMgLFh1YUgCCtKLXdIl9Q9ebXkfxL87ie+Td9f8W38/Z8LFEyy+Qx9ZrwWRsZuGTVQepfCYk8S4b3au9N16Fo8v5V4Ia/HiqEkKPSoxFmh9MmI1toG0j81ZOF/ZtvVaI3oMmfDqgPizKki3rMyNGvlv1Pbb5Ca+zMPykyZg4fvFnyMTIY4pvU51fhAYMokgI2v3qqkobm6cJ1iFuRaXj2+tv5yghePkgWSRFsOy5qeLJ7s+zs+2JWnre2FIC4mi9okeW5Urx7hLmi1482nxZ3ohRq8E2A2JEAMQUzFIhhBEtKAYxj04v5a51bieka0nhDUszEQAFskiKlu/BlE0n4XGhgiOdeMVrg/aeKJNFQXVIvsUpMt4c6Oiu8TuDBXI0/hMt1hBQggCYOyAACbGMRVRDAvco+FeEdtDq5jvtaA8vDWFsBZjgYoIxVOw3YSYGBSbI9tYeVDW2o6FYymIFhdP/WyP+Cg6dompvfcjU3//NH4CG5XK5U7jTXeZgIL0CPoC/RSCSOdFztw/g4+j8tB3SneCRfMDJsLCwZK2iTjxUVyyaQbzV52v/WIV1F6H+UEWNcRTj2KrKMaDIBVAhUjEOCYBXviaC7FDAFOd60/n1N9w78Hme0KkgeVooX9r/3WEZot10XiKHeBnY649l3BM0cDsR2T7uf5aXO6QcLYH6BbsBONPd1EYH2IABjHmqxCkir4AxnMsGUIA/RQDEMQ85PBR15/Pb4nbsQiLV8RYuGv3iYI+uJoyMdcLBpRtH8L1BdI243zqw1k8+Ti2ElFwRE0TFAOgGOijzDEEBHHoXUXMgzDPBhN3oBDWol9pEfh0EhEL0iOWbc7lNWYLx7FkN5ZtGxcFfO4AAsVvBARyOY7DGGWArJjr9eP53jtbCCdIt1RRFIBFVJ9gnD7zDraPg40n7GIuTmYsQj4Vg30VoR1HsbsBdy3g1F0hhLUqjg8AhSJnMdslrk1IpE80fRfXmM27+DEhE92AjXdbBshOPNdPgNeD6aNb4+t6fQU5ZlKgCJ1EOA0fiFBU22aOnABxZcnEpzvJjNkc42v9WWzXZtz2RxyY6Vy6K4WwFqKI4ZWj7YBCHhXLLt5Jv2rHkVvjZMCOtXH600ebx2pMhdjaH3XrYeHlDhSpQ8hJ0cEdwtiVDuszTx/c3GbeCcmYE7HDjYff1BfxQoiMVS8/iqI8iiIeIQMomo2hiJeUU5/I+C1jHNrGJFi7XsdSMFUI0UaQw1KFGMGlIybM4LCQkUPb5RnL+sGlw+Bs3o7RayuSHHjqyHI0cyjff6poM42FnzpsgqlDgBb2kFgg5uIW8JVdXPsx5uKTLqec5v3q1JHvlQr7bAsmD6JYB1lUMnwgZcTSAjvf5ZTt+JDMmIAZS+Ne8MZBfEvsv3u+JW7HgjcOmAwm90ujH04eoN8K9GvtT0AEja8GkwcWIMTd+yPs5zEU1hC/tFD/ESHQ9gEy8QjZ9XP9ycgjtor2EoQoXtifx/yJh5NCgn0wYWO2TWZb+0nax/muvw9BivfE7Zj/+kMorMU+ISMWTDzENort2gRj7JOOZd6bePjl4j2xDub/Yh8K2w57Baww7cHcKvDnYGJfcTytnyB7jUc8aNAGHhSw8x2Y81wfP7i4rzie1tu8iyg84I0/YNgmHpDEJxhrYPEv7l0Kzu4pfnr6Iswb34NC7xGFttuAefL4Hg9C3fn/Zc9mmndht2nBuOVdksbEH99d7IqNEWSneOd3Gf/CLjJ9xnaizbj/n/O7i12xUVY5d7/xzt9PART0yTvNv8/sMMG5XX2lwjbOKmfvQ/HvM965HeJBDPjEP0/fa/72/DZTKmwDjYJ8Uypnd5gKdoOXtj/52VfN9edKikKQjbbKme0CGOWV17abj1/6igpRCLJZVnntXrOS4pOfUoxCkM20lVe/YRT/euUeFaAQZLNt5fTXzY1Xvmb+8cK2QpA82MrP7zEfvfhlLX4hSB7sxst8bxSC5MU++vGXCkHyZB++sK0QJE+GoheC5Mk+eK4UFILkyFD0a4UgObLrPyydKgTJkf3lVGm7HluFIDky3SWFIDkzFH+pECRHlh5dy4UgOTIVBSIsAFIIkiN7//nSSd0thSA5MuyW/RBlolRYYYUVVlhh7e1T+M7cE7tD1IwAAAAASUVORK5CYII=" class="van-image__img"> -->
                    </div>
                  </div>

                  <div class="list_img_wrap">
                    <div class="van-image" style="width: 100%; height: 100%;" @click="handleItemClick(cItem)">
                      <img :src="cItem.img" class="van-image__img">
                      <p class="list_timer">{{ cItem.time }}</p>
                    </div>
                  </div>
                </div>

              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>
import api from '@/api'
import Nav from '@/components/Nav'
export default {
  name: 'Promote',
  components: { Nav },
  data() {
    return {
      tabSelect: {},
      cate: [],
      all: [],
      list: []
    }
  },
  created() {
    this.$store.dispatch('app/setNavIndex', 1)
    this.init()
  },
  methods: {
    async init() {
      let res = await api.activity.findCate({})
      console.log('cate', res.data)
      if (res && res.code === 0) {
        this.cate = res.data
        this.tabSelect = res.data[0]
      }

      res = await api.activity.findAll({})
      if (res && res.code === 0) {
        this.all = res.data
        this.list = res.data
      }
    },
    handleTabChange(index) {
      this.tabSelect = this.cate[index]
      if (index === 0) {
        this.list = this.all
      } else {
        this.list = this.all.filter(f => f.cateCode === this.tabSelect.code)
      }
    },
    handleItemClick(item) {
      this.$router.push({
        path: '/activity/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #e5e5e5;
}

.header {
  min-height: 3.4375rem;
  padding: 0 0.9375rem;
  background-color: #fff;
  >div {
    display: flex;
    align-items: center;
    min-width: 3.125rem;
  }
  .title {
    color: #575a6b;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1 1;
  }
}

.content {
  padding: 0.625rem 0.9375rem;
  .listItem {
    height: 9.625rem;
    width: 100%;
    position: relative;
    border-radius: 0.625rem;
    margin-top: 0.625rem;
    overflow: hidden;
    box-shadow: 0 0.125rem 0.25rem rgb(108 123 168 / 20%);
    .list_icon {
      width: 3.4375rem;
      height: 3.4375rem;
      position: absolute;
      z-index: 2;
      top: 0.3125rem;
      left: -0.3125rem;
    }

    .list_img_wrap {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
