let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +58 src/routes/index/+page.svelte
badd +55 src/lib/components/index/CheckboxOptionsSection.svelte
badd +18 src/lib/components/index/CheckBoxWidget.svelte
badd +25 src/lib/components/index/FilterBox.svelte
badd +25 src/lib/emojis.ts
badd +4 src/lib/components/index/CategoryFilter.svelte
badd +48 src/lib/exercisesDB.ts
badd +34 src/lib/components/index/FilterSection.svelte
badd +18 src/enums/exerciseVariations.ts
badd +35 src/lib/components/index/ExerciseIndexCard.svelte
badd +9 src/lib/components/index/SearchBar.svelte
badd +17 src/types/exercise.ts
badd +43 src/store.ts
argglobal
%argdel
$argadd ~/svelte_projects/card-workout/
edit src/routes/index/+page.svelte
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 25 + 26) / 53)
exe 'vert 1resize ' . ((&columns * 78 + 78) / 157)
exe '2resize ' . ((&lines * 25 + 26) / 53)
exe 'vert 2resize ' . ((&columns * 78 + 78) / 157)
exe 'vert 3resize ' . ((&columns * 78 + 78) / 157)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 92 - ((15 * winheight(0) + 12) / 25)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
92
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/index/CheckboxOptionsSection.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/index/CheckboxOptionsSection.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/index/CheckboxOptionsSection.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((10 * winheight(0) + 12) / 25)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 04|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/index/CheckBoxWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/index/CheckBoxWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/index/CheckBoxWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 46 - ((31 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
46
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 25 + 26) / 53)
exe 'vert 1resize ' . ((&columns * 78 + 78) / 157)
exe '2resize ' . ((&lines * 25 + 26) / 53)
exe 'vert 2resize ' . ((&columns * 78 + 78) / 157)
exe 'vert 3resize ' . ((&columns * 78 + 78) / 157)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
