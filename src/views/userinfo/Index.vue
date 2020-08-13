<template>

 <el-tabs :tab-position="tabPosition" style="height: 500px;">

    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-custom"></i> 请假申请</span>
                <!-- <el-table
                  :data="tableData"
                  style="width: 100%"
                >
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="cause"
                    label="事由"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="请假时间"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                      <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small">
                        同意请假
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table> -->
                          <template>
                            <el-table
                              :data="tableData3"
                              border
                              style="width: 100%">
                              <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                              </el-table-column>
                              <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                              </el-table-column>
                              <el-table-column
                                prop="cause"
                                label="事由">
                              </el-table-column>
                                 <el-table-column
                                prop="time"
                                label="请假时长">
                              </el-table-column>
                            </el-table>
                          </template>


                        <div>
                          <el-popconfirm
                            title="确定批准申请吗"
                          >
                            <el-button slot="reference" style="color:red">批准以上申请</el-button>
                          </el-popconfirm>
                         </div>



                    </el-tab-pane>






    <el-tab-pane>
       <span slot="label"><i class="el-icon-chat-line-round"></i> 用户通知</span>
          <template>
              <el-tabs v-model="activeNames" @tab-click="handleClick">
                <el-tab-pane label="今日菜谱" class="el-icon-food" name="first" >
                          <template>
                            <el-table
                              :data="tableData1"
                              border
                              style="width: 100%">
                              <el-table-column
                                prop="zao"
                                label="早餐"
                                width="180">
                              </el-table-column>
                              <el-table-column
                                prop="zhong"
                                label="中餐"
                                width="180">
                              </el-table-column>
                              <el-table-column
                                prop="wan"
                                label="晚餐">
                              </el-table-column>
                            </el-table>
                          </template>
                </el-tab-pane>
                      
                <el-tab-pane label="会议通知" name="second" style="height: 1000px;">
                      <template>
                        <el-button
                        plain
                        @click="open2">
                        通知1
                        </el-button>
                      </template> 
                      <template>
                        <el-button
                        plain
                        @click="open3">
                        通知2
                        </el-button>
                      </template>   

                        
       
                </el-tab-pane>
                <el-tab-pane label="活动通知" name="third">
                   

                <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="东软集团Matrix分部员工运动大会" name="1">
    <div>发布时间：     2020-08-13</div>                       
    <div>发布内容：</div>
    <div>     2020-08-14 -- 2020-08-20</div>
    <div>     在新世界运动中心举办第十三届东软集团Matrix分部员工运动大会，请所有员工参加，不上班，工资照拿！</div>
  </el-collapse-item>
  <el-collapse-item title="东软集团Matrix分部员工表彰大会" name="2">
    <div>发布时间：     2020-08-13</div>
    <div>发布内容：</div>
    <div>     2020-08-21</div>
    <div>     在春熙路小龙坎火锅店里举行员工表彰大会，拿钱！</div>
  </el-collapse-item>
  <el-collapse-item title="东软集团Matrix分部年度总结大会" name="3">
    <div>发布时间：     2020-08-13</div>
    <div>发布内容：</div>
    <div>     2020-08-22</div>
    <div>     在春熙路大龙燚火锅店里举行员工年度大会，快来拿钱！</div>
  </el-collapse-item>
  <el-collapse-item title="东软集团Matrix分部聚餐happy" name="4">
      <div>发布时间：     2020-08-13</div>
      <div>发布内容：</div>
      <div>     2020-08-23</div>
      <div>     成都Space酒吧Matrix专属卡座，嗨起来！谁先跑谁买单！</div>
  </el-collapse-item>
</el-collapse>






                </el-tab-pane>



                <el-tab-pane label="工资发放通知" name="fourth">
                   <template>
                    <el-table
                      :data="tableData2"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="basic"
                        label="基本工资"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="jiang"
                        label="奖金"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="sum"
                        label="税后总工资">
                      </el-table-column>
                    </el-table>
                  </template>


                </el-tab-pane>
              </el-tabs>
            </template>
    </el-tab-pane>


  </el-tabs>




  



</template>

<script>
import { users} from "@/api/user/user";
export default {
  data() {
    return {
      activeNames: '1',
      tabPosition: 'left',
 


tableData3: [{
            date: '2020-08-13',
            name: '冉海锋',
            cause: '回家结婚',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '尼一卓',
            cause: '提车',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '杨恩舟',
            cause: '常回家看看',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '杨博汇',
            cause: '看NBA总决赛',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '马钰琦',
            cause: '旅游',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '代恩',
            cause: '住院',
            time: '2020-08-14~2020-09-01',
          }, {
            date: '2020-08-13',
            name: '肖战',
            cause: '粉丝见面会',
            time: '2020-08-14~2020-09-01',
          }],



          tableData1: [{
            zao: '翠玉豆糕',
            zhong: '凤尾鱼翅',
            wan: '维族烤羊肉',
          }, {
            zao: '奶白葡萄',
            zhong: '红梅珠香',
            wan: '片皮乳猪',
          }, {
            zao: '雪山梅',
            zhong: '宫保野兔',
            wan: '葱烧鲨鱼皮',
          }, {
            zao: '香酥苹果',
            zhong: '随上荷叶卷',
            wan: '疆字红油百叶',
          }, {
            zao: '杏仁佛手',
            zhong: '山珍刺龙芽',
            wan: '巧手烧雁鸢',
          }, {
            zao: '豆面饽饽',
            zhong: '五香仔鸽',
            wan: '参芪炖白凤',
          }, {
            zao: '奶汁角',
            zhong: '罗汉大虾',
            wan: '麻仁鹿肉串',
          }],




          tableData2: [{
            name:'冉海锋',
            basic: '10000',
            jiang: '10000',
            sum: '18000',
          }, {
            name:'尼一卓',
            basic: '2000',
            jiang: '20',
            sum: '2000',
          }, {
            name:'杨博汇',
            basic: '500',
            jiang: '50',
            sum: '520',
          }, {
            name:'杨恩舟',
            basic: '2000',
            jiang: '0',
            sum: '1900',
          }, {
            name:'代恩',
            basic: '2000',
            jiang: '0',
            sum: '1900',
          }, {
            name:'马钰琦',
            basic: '2000',
            jiang: '2000',
            sum: '3800',
          }, {
            name:'肖战',
            basic: '100',
            jiang: '-100',
            sum: '0',
          }],
         






          
    };
  },
  created() {
    users()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
    deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      open2() {
        this.$notify({
          title: '通知',       
          message: '为完善集团管理制度，促进集团事业健康快速发展，经研究，决定召开集团职工代表大会。现就会议有关事宜通知如下：一、时间、地点：根据集团项目建设实际情况，会议拟分两批次进行：1.第一批次于2020年8月14日上午8：00在集团办公楼三楼大会议室举行。2.第二批次于2020年8月14日上午11：20在集团办公楼三楼大会议室举行。二、会议内容：审议通过同科集团红黄灯管理方案。三、参会人员：集团全体中层及以上干部和职工代表（名单见附1）。四、会议要求：1.请各公司、部门负责人通知本公司、部门干部和职工代表于会议召开前10分钟到会场报到；2.本次会议是集团制度建设的一次重要会议，请全体参会人员提前安排好工作，准时出席会议，无特殊情况，一律不得迟到、早退、请假。特此通知。东软集团Matrix分部。2020年8月14日',
          duration: 0
        });
      },
       open3() {
        this.$notify({
          title: '通知',
          message: '各部(室)：根据工作需要，经公司研究，决定召开中层干部培训会议。现将有关事宜通知如下：一、会议时间2020年8月14日--8月20日。二、会议地点：名门国际26楼会议室。三、参会人员：项目总监(负责人)、总监代表等。四、会议内容及安排：1、中层干部培训会议(8月18日10：00--17:00);2、团队建设活动(8月19日--8月20日)。五、参会要求：1、请参会人员安排好项目工作，按要求准时参会，不得无故缺席;2、服从会议组委会的安排，遵守会场纪律，不得中途退场;3、要求与会人员8月18日9:30到达会场，综合办公室组织签到。东软集团Matrix分部。2020年8月14日',
          duration: 0
        });
      }
  }
};
</script>