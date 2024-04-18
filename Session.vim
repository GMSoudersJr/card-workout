let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +25 src/lib/components/index/FilterBox.svelte
badd +25 src/lib/emojis.ts
badd +117 src/routes/index/+page.svelte
badd +4 src/lib/components/index/CategoryFilter.svelte
badd +48 src/lib/exercisesDB.ts
badd +18 src/lib/components/index/CheckBoxWidget.svelte
badd +34 src/lib/components/index/FilterSection.svelte
badd +18 src/enums/exerciseVariations.ts
badd +35 src/lib/components/index/ExerciseIndexCard.svelte
badd +9 src/lib/components/index/SearchBar.svelte
badd +55 src/lib/components/index/CheckboxOptionsSection.svelte
badd +17 src/types/exercise.ts
badd +44 src/store.ts
argglobal
%argdel
$argadd .
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
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 1resize ' . ((&columns * 84 + 84) / 168)
exe '2resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 2resize ' . ((&columns * 84 + 84) / 168)
exe '3resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 3resize ' . ((&columns * 83 + 84) / 168)
exe '4resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 4resize ' . ((&columns * 83 + 84) / 168)
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
let s:l = 130 - ((22 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
130
normal! 07|
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
let s:l = 82 - ((20 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
82
normal! 05|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/store.ts") | buffer ~/svelte_projects/card-workout/src/store.ts | else | edit ~/svelte_projects/card-workout/src/store.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 41 - ((22 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
41
normal! 05|
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
let s:l = 4 - ((3 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 022|
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 1resize ' . ((&columns * 84 + 84) / 168)
exe '2resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 2resize ' . ((&columns * 84 + 84) / 168)
exe '3resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 3resize ' . ((&columns * 83 + 84) / 168)
exe '4resize ' . ((&lines * 28 + 29) / 59)
exe 'vert 4resize ' . ((&columns * 83 + 84) / 168)
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
