# automatically generated by the FlatBuffers compiler, do not modify

# namespace: momentspack

import flatbuffers

class T_MOMENTS_ARTICLE_ADD_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_MOMENTS_ARTICLE_ADD_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_MOMENTS_ARTICLE_ADD_RS()
        x.Init(buf, n + offset)
        return x

    # T_MOMENTS_ARTICLE_ADD_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_MOMENTS_ARTICLE_ADD_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_MOMENTS_ARTICLE_ADD_RS
    def PeerUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_MOMENTS_ARTICLE_ADD_RS
    def ArticleId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_MOMENTS_ARTICLE_ADD_RSStart(builder): builder.StartObject(3)
def T_MOMENTS_ARTICLE_ADD_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_MOMENTS_ARTICLE_ADD_RSAddPeerUserId(builder, peerUserId): builder.PrependUint64Slot(1, peerUserId, 0)
def T_MOMENTS_ARTICLE_ADD_RSAddArticleId(builder, articleId): builder.PrependUint64Slot(2, articleId, 0)
def T_MOMENTS_ARTICLE_ADD_RSEnd(builder): return builder.EndObject()