<template>
    <div class="remove_punctuation">
        <nya-container title="英文标点转换">
            <nya-input v-model.trim="content" fullwidth rows="8" type="textarea" autofocus autocomplete="off" label="待处理的内容" />
        </nya-container>
        <nya-container v-if="result" title="处理结果">
            <nya-copy :copy="result">
                <pre><div v-text="result"></div></pre>
            </nya-copy>
        </nya-container>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'RemovePunctuation',
    head() {
        return this.$store.state.currentTool.head;
    },
    data() {
        return {
            content: ''
        };
    },
    computed: {
        result() {
            
            String.prototype.replaceAll = function(s1, s2) {
                return this.replace(new RegExp(s1, "gm"), s2);
            }
            var mdValue = this.content;
            mdValue = mdValue.replaceAll('。', '.');
            mdValue = mdValue.replaceAll('！', '!');
            mdValue = mdValue.replaceAll('，', ',');
            mdValue = mdValue.replaceAll('？', '?');
            mdValue = mdValue.replaceAll('《', '<');
            mdValue = mdValue.replaceAll('》', '>');
            mdValue = mdValue.replaceAll('：', ':');
            mdValue = mdValue.replaceAll('；', ';');
            mdValue = mdValue.replaceAll('（', '(');
            mdValue = mdValue.replaceAll('）', ')');
            mdValue = mdValue.replaceAll('”', '"');
            mdValue = mdValue.replaceAll('“', '"');
            mdValue = mdValue.replace(new RegExp(/"[ ]{0,}([\u4e00-\u9fa5]+)[ ]{0,}"/, "gm"), "“$1”");
            return mdValue;

        }
    }
};

</script>
