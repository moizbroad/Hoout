import React from 'react'

const Textarea = () => {
  return (
    <div class="mb-5">
                        
                        <div class="grid text-sm after:px-3.5 after:py-2.5 [&>textarea]:text-inherit after:text-inherit [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2] after:[grid-area:1/1/2/2] after:whitespace-pre-wrap after:invisible after:content-[attr(data-cloned-val)_'_'] after:border">
                            <textarea class="w-full text-slate-600 bg-white border border-[#D9D9D9]  appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" name="message" id="message" rows="6" onInput="this.parentNode.dataset.clonedVal = this.value" placeholder="Description" required></textarea>
                        </div>
                    </div>
  )
}

export default Textarea;