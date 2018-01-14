<template>
<div id="questions" class="container" >
  <div v-show="countCorrect != 0"> {{countCorrect }} </div>
<div class="question" v-for="thething in file.questions">
<div class="eachquestion">
  <p>{{thething.question}}</p>
  <div class="options" v-for="(option, key) in thething.options">
    <input type="radio" class="form-control"  :name="thething.id" v-bind:value="key" v-on:change="addAnswer"> {{option}}

  </div>

</div>

</div>

<a href="#" id="previous">Previous</a> || <a href="#" id="next">Next</a>

<hr />
<a href="#" @click="calculateAnswers"> Finish </a>
</div>
</template>

<script>
import file from "../assets/questions/questions.json";
export default {
  name: 'Quiz',
  data () {
    return {
      file,
      answers : [],
      result : [],
      countCorrect : 0
    }
  },

  methods : {
    print : function(){
      console.log(this.file);
    },

    addAnswer: function(evt) {
      var num = evt.target.name;

      this.answers = this.answers.filter(function(el){
        return el.number !== num;
      })

      var val = evt.target.value;

      this.answers.push({
        "number" : num,
        "answer" : val
      });



  },

  calculateAnswers : function(){
    countCorrect = 0;
    var b = [];
    var questions = this.file.questions;

    for(var i = 0; i < questions.length; i++){
        b.push({
        "number" : questions[i].id,
        "answer" : questions[i].answer
      })
    }

var answers = this.answers;
    if(answers.length === b.length){
      for(var j = 0; j <b.length; j++){
        for(var v = 0; v < answers.length; v++){

          // console.log("Number " + b[j].number + " / " + answers[v].number);
          if(b[j].number === answers[v].number){
            console.log( "B " + b[j].answer + " === ans " +  answers[v].answer);
            if(b[j].answer === answers[v].answer){
              this.result.push({
                "number": b[j].number,
                "correct" : true,
                "answer" : b[j].answer,
                "yourAnswer" : answers[v].answer
              })

              this.countCorrect++;
            }else{
              this.result.push({
                "number": b[j].number,
                "correct" : false,
                "answer" : b[j].answer,
                "yourAnswer" : answers[v].answer
              })
              this.countCorrect--;
            }

          //  console.log("Number " + b[j].number + " = True");
          console.log(this.countCorrect);
          console.log("*************************");
          console.log(this.result);
          }
        }
      }
    }
  }



  },

  mounted () {
    this.print();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.active{
  display: block !important;
}

#previous{
  display: none;
}
</style>
