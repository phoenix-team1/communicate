# automatically generated by the FlatBuffers compiler, do not modify

# namespace: userpack

import flatbuffers

class T_GET_USER_INFO_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GET_USER_INFO_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GET_USER_INFO_RQ()
        x.Init(buf, n + offset)
        return x

    # T_GET_USER_INFO_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GET_USER_INFO_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GET_USER_INFO_RQ
    def UserMsg(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_GET_USER_INFO_RQStart(builder): builder.StartObject(2)
def T_GET_USER_INFO_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_GET_USER_INFO_RQAddUserMsg(builder, userMsg): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(userMsg), 0)
def T_GET_USER_INFO_RQEnd(builder): return builder.EndObject()
