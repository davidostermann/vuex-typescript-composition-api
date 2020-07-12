import { ref, Ref, computed, ComputedRef } from '@vue/composition-api';
import store from '../store';

function tagsFuncs() {

    const tags: ComputedRef<string[]> = computed(() => store.state.tags);

    const updateTags = (pTags: string[]) => store.dispatch('updateTags', pTags);

    const newTag = ref('');

    const remove = (tag: string) => {
        updateTags(tags.value.filter((t) => t !== tag));
    };

    const reverse = () => {
        updateTags(tags.value.reverse());
    };

    const addTag = () => {
        if (newTag.value.trim().length === 0 || tags.value.includes(newTag.value)) {
            return;
        }
        updateTags([...tags.value, newTag.value.trim()]);
        newTag.value = '';
    };

    const handleBackspace = () => {
        if (newTag.value.length === 0) {
            updateTags(tags.value.slice(0, -1));
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
