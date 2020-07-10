import { ref, Ref } from '@vue/composition-api';
import { useState, useActions } from 'vuex-composition-helpers';

function tagsFuncs() {

    const { tags } = useState<{ tags: string[]}>(['tags']);

    const {updateTags} = useActions(['updateTags']);

    const newTag = ref('');

    const remove = (tag: string) => {
        updateTags(tags.value.filter((t) => t !== tag));
    };

    const reverse = () => {
        updateTags(tags.value.reverse());
    };

    const addTag = () => {
        if (newTag.value.trim().length === 0 || (tags as Ref<string[]>).value.includes(newTag.value)) {
            return;
        }
        updateTags([...(tags as Ref<string[]>).value, newTag.value.trim()]);
        newTag.value = '';
    };

    const handleBackspace = () => {
        if (newTag.value.length === 0) {
            updateTags((tags as Ref<string[]>).value.slice(0, -1));
        }
    };

    return {
        tags,
        newTag,
        remove,
        reverse,
        addTag,
        handleBackspace,
    };
}

export default tagsFuncs;
