let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +28 src/routes/Homepage.svelte
badd +31 src/routes/about/+page.svelte
badd +1 src/routes/cards/+layout.svelte
badd +29 src/routes/about/+layout.svelte
badd +12 src/lib/components/about/ListWidget.svelte
badd +15 src/lib/strings/forAboutPage.ts
badd +10 src/lib/components/about/ParagraphWidget.svelte
badd +11 src/routes/+layout.svelte
badd +0 fugitive:///home/gmsoudersjr/svelte_projects/card-workout/.git//0/src/routes/+layout.svelte
argglobal
%argdel
$argadd .
edit fugitive:///home/gmsoudersjr/svelte_projects/card-workout/.git//0/src/routes/+layout.svelte
set splitbelow splitright
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
exe '1resize ' . ((&lines * 23 + 24) / 48)
exe '2resize ' . ((&lines * 22 + 24) / 48)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
silent! normal! zE
1,7fold
let s:l = 4 - ((3 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/routes/about/+page.svelte") | buffer ~/svelte_projects/card-workout/src/routes/about/+page.svelte | else | edit ~/svelte_projects/card-workout/src/routes/about/+page.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 32 - ((17 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 05|
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 23 + 24) / 48)
exe '2resize ' . ((&lines * 22 + 24) / 48)
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
